// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  serviceEndpoint: 'http://localhost:9123',
  refreshInterval: 60000,
  sleepFrom:"20:00:00",
  sleepUntil:"07:00:00"
};
