import { tilPrompt } from "./templates/til";
import { troubleshootingPrompt } from "./templates/troubleshooting";
import { tutorialPrompt } from "./templates/tutorial";
import { PromptParams } from "./types";

export const promptMap = {
  tutorial: tutorialPrompt,
  til: tilPrompt,
  troubleshooting: troubleshootingPrompt,
} as const;

export type PromptStyle = keyof typeof promptMap;

export const buildPrompt = (style: PromptStyle, params: PromptParams) => {
  return promptMap[style](params);
};
