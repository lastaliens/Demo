export class EnvService {

  // The values that are defined here are the default values that can
  // be overridden by env.js

  // API url
  public apiUrl = 'http://35.160.184.112:8090/api/v1/';

  // Whether or not to enable debug mode
  public enableDebug = true;

  constructor() {
  }

}

export const EnvServiceFactory = () => {
  // Create env
  const env = new EnvService();

  // Read environment variables from browser window
  const browserWindow = window || {};
  const browserWindowEnv = browserWindow['__env'] || {};

  // Assign environment variables from browser window to env
  // In the current implementation, properties from env.js overwrite defaults from the EnvService.
  // If needed, a deep merge can be performed here to merge properties instead of overwriting them.
  for (const key in browserWindowEnv) {
    if (browserWindowEnv.hasOwnProperty(key)) {
     env[key] = window['__env'][key];
    }
  }
  return env;
};

export const EnvServiceProvider = {
  provide: EnvService,
  useFactory: EnvServiceFactory,
  deps: [],
};
