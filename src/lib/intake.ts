export const budgetRanges = ["<$1k", "$1k–$3k", "$3k–$10k", "$10k+"] as const;
export const projectTypes = [
  "website",
  "web app",
  "mobile app",
  "SEO/marketing",
  "other",
] as const;
export const timelineOptions = ["ASAP", "2–4 weeks", "1–2 months", "flexible"] as const;

export type IntakePayload = {
  name: string;
  email: string;
  company?: string;
  budget?: (typeof budgetRanges)[number] | "";
  projectType: (typeof projectTypes)[number];
  timeline?: (typeof timelineOptions)[number] | "";
  message: string;
  website?: string;
};

export type IntakeValidationResult = {
  ok: boolean;
  data?: IntakePayload;
  errors?: Record<string, string>;
};

const emailRegex = /.+@.+\..+/i;

const normalizeText = (value: unknown) => {
  if (typeof value !== "string") return "";
  return value.trim();
};

export const validateIntake = (input: Record<string, unknown>): IntakeValidationResult => {
  const name = normalizeText(input.name ?? input.fullName);
  const email = normalizeText(input.email);
  const company = normalizeText(input.company);
  const budget = normalizeText(input.budget);
  const projectType = normalizeText(input.projectType);
  const timeline = normalizeText(input.timeline);
  const message = normalizeText(input.message ?? input.details);
  const website = normalizeText(input.website);

  const errors: Record<string, string> = {};

  if (!name) errors.name = "Full name is required.";
  if (!email || !emailRegex.test(email)) errors.email = "Please provide a valid email address.";
  if (!projectType) {
    errors.projectType = "Project type is required.";
  } else if (!projectTypes.includes(projectType as (typeof projectTypes)[number])) {
    errors.projectType = "Please choose a valid project type.";
  }

  if (budget && !budgetRanges.includes(budget as (typeof budgetRanges)[number])) {
    errors.budget = "Please choose a valid budget range.";
  }

  if (timeline && !timelineOptions.includes(timeline as (typeof timelineOptions)[number])) {
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
      company: company || undefined,
      budget: (budget || undefined) as IntakePayload["budget"],
      projectType: projectType as IntakePayload["projectType"],
      timeline: (timeline || undefined) as IntakePayload["timeline"],
      message,
      website: website || undefined,
    },
  };
};
