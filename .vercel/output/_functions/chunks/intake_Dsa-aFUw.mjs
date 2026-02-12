const budgetRanges = ["<$1k", "$1k–$3k", "$3k–$10k", "$10k+"];
const projectTypes = [
  "website",
  "web app",
  "mobile app",
  "SEO/marketing",
  "other"
];
const timelineOptions = ["ASAP", "2–4 weeks", "1–2 months", "flexible"];
const emailRegex = /.+@.+\..+/i;
const normalizeText = (value) => {
  if (typeof value !== "string") return "";
  return value.trim();
};
const validateIntake = (input) => {
  const name = normalizeText(input.name ?? input.fullName);
  const email = normalizeText(input.email);
  const company = normalizeText(input.company);
  const budget = normalizeText(input.budget);
  const projectType = normalizeText(input.projectType);
  const timeline = normalizeText(input.timeline);
  const message = normalizeText(input.message ?? input.details);
  const website = normalizeText(input.website);
  const errors = {};
  if (!name) errors.name = "Full name is required.";
  if (!email || !emailRegex.test(email)) errors.email = "Please provide a valid email address.";
  if (!projectType) {
    errors.projectType = "Project type is required.";
  } else if (!projectTypes.includes(projectType)) {
    errors.projectType = "Please choose a valid project type.";
  }
  if (budget && !budgetRanges.includes(budget)) {
    errors.budget = "Please choose a valid budget range.";
  }
  if (timeline && !timelineOptions.includes(timeline)) {
    errors.timeline = "Please choose a valid timeline.";
  }
  if (!message) {
    errors.message = "Project details are required.";
  } else if (message.length < 20) {
    errors.message = "Project details must be at least 20 characters.";
  }
  if (website) {
    errors.website = "Spam detected.";
  }
  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }
  return {
    ok: true,
    data: {
      name,
      email,
      company: company || void 0,
      budget: budget || void 0,
      projectType,
      timeline: timeline || void 0,
      message,
      website: website || void 0
    }
  };
};

export { budgetRanges as b, projectTypes as p, timelineOptions as t, validateIntake as v };
