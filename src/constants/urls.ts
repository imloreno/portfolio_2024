// Base url for the service
export const ID_KEY = ':id';
export const NAME_KEY = ':name';
export const SERVICE_URL = import.meta.env.PROD_ENV || 'http://localhost:8000';
export const PROJECTS_URL = `${SERVICE_URL}/api/v1/projects`;
export const FILES_URL = `${SERVICE_URL}/api/v1/file`;

export const PROJECT_DETAILS = `${PROJECTS_URL}/details/:id`;
export const PROJECT_PROFILE = `${PROJECTS_URL}/details/:id/profile`;
export const SKILLS_URL = `${SERVICE_URL}/api/v1/skills`;

// Gallery urls
export const GALLERY_LIST = `${FILES_URL}/project-gallery/${ID_KEY}`;
export const GALLERY_PHOTO = `${FILES_URL}/project-gallery/${ID_KEY}/${NAME_KEY}`;