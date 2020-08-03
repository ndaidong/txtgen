export function sentence(): string;
export function paragraph(len?: number): string;
export function article(len?: number): string;

export function addNouns(ls?: string[]): number;
export function addAdjectives(ls?: string[]): number;
export function addTemplates(ls?: string[]): number;

export function setNouns(ls?: string[]): number;
export function setAdjectives(ls?: string[]): number;
export function setTemplates(ls?: string[]): number;

export function getNouns(): string[];
export function getAdjectives(): string[];
export function getTemplates(): string[];
