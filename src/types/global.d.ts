interface Window {
  gapi: {
    load: (name: string, callback: (value: unknown) => void) => void;
    client: {
      init: (config: {
        apiKey: string;
        clientId: string;
        discoveryDocs: string[];
        scope: string;
      }) => Promise<void>;
      drive: {
        files: {
          list: (params: any) => Promise<any>;
          get: (params: any) => Promise<any>;
        };
      };
    };
    auth2: {
      getAuthInstance: () => {
        isSignedIn: {
          get: () => boolean;
        };
        signIn: () => Promise<void>;
      };
    };
  };
  Dropbox: {
    choose: (options: {
      success: (files: Array<{ link: string; name: string }>) => void;
      cancel: () => void;
      linkType: string;
      multiselect: boolean;
      extensions: string[];
    }) => void;
  };
}

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_GOOGLE_API_KEY: string;
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
    NEXT_PUBLIC_DROPBOX_APP_KEY: string;
  }
}