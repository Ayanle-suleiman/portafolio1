import { useEffect, useState } from "react";
import { github, projectDetails } from "./data";

const CACHE_KEY = `gh-repos:${github.username}`;
const CACHE_MS = 60 * 60 * 1000; // 1 hour – keeps us well under GitHub's 60 requests/hour limit

const prettify = (name) =>
  name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

const categoryFor = (lang) =>
  ({
    "Jupyter Notebook": "Data Analysis",
    Python: "Python",
    R: "Statistics",
    JavaScript: "Web",
    TypeScript: "Web",
    HTML: "Web",
  })[lang] || "Other";

function toProject(repo) {
  const d = projectDetails[repo.name] || {};
  const tags = d.tags || [repo.language, ...(repo.topics || [])].filter(Boolean);
  return {
    id: repo.name,
    title: d.title || prettify(repo.name),
    category: d.category || categoryFor(repo.language),
    year: d.year || (repo.pushed_at || "").slice(0, 4),
    question: d.question || repo.description || "",
    approach: d.approach || "",
    result: d.result || "",
    highlights: d.highlights || [],
    tags,
    image: d.image || "",
    code: repo.html_url || `https://github.com/${github.username}/${repo.name}`,
    demo: d.demo || repo.homepage || "",
    report: d.report || "",
    featured: !!d.featured,
    stars: repo.stargazers_count || 0,
    updated: repo.pushed_at || "",
  };
}

function order(list) {
  return [...list].sort(
    (a, b) => (b.featured - a.featured) || (b.updated || "").localeCompare(a.updated || "")
  );
}

// Used if GitHub can't be reached: the repos you've described in data.js.
const fallback = order(Object.keys(projectDetails).map((name) => toProject({ name })));

function select(repos) {
  return order(
    repos
      .filter((r) => !github.hide.includes(r.name))
      .filter((r) => !(github.hideForks && r.fork))
      .filter((r) => !r.archived && r.size > 0) // skip archived and empty repos
      .map(toProject)
  );
}

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { at, repos } = JSON.parse(raw);
    return Date.now() - at < CACHE_MS ? repos : null;
  } catch {
    return null;
  }
}

let memo = null; // shared between components so we only fetch once per page load
let inflight = null;

function load() {
  if (memo) return Promise.resolve(memo);
  const cached = readCache();
  if (cached) return Promise.resolve((memo = select(cached)));
  inflight ||= fetch(`https://api.github.com/users/${github.username}/repos?per_page=100&sort=pushed`, {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`GitHub ${r.status}`))))
    .then((repos) => {
      try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), repos }));
      } catch { /* storage unavailable – fine */ }
      const projects = select(repos);
      return (memo = projects.length ? projects : fallback);
    })
    .catch(() => (memo = fallback));
  return inflight;
}

export default function useGithubProjects() {
  const [state, setState] = useState(() => ({ projects: memo || [], loading: !memo }));

  useEffect(() => {
    let alive = true;
    load().then((projects) => alive && setState({ projects, loading: false }));
    return () => {
      alive = false;
    };
  }, []);

  return state;
}
