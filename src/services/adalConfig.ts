import { AdalConfig, AuthenticationContext, adalGetToken } from "react-adal";

// Endpoint URL
export const endpoint = "https://solucoesspfx.sharepoint.com";

// App Registration ID
const appId = "1c9b6349-e135-4ae6-88c9-5e58706db31c";

export const adalConfig: AdalConfig = {
  cacheLocation: "localStorage",
  clientId: appId,
  endpoints: {
    api: endpoint,
  },
  postLogoutRedirectUri: window.location.origin,
  tenant: "solucoesspfx.onmicrosoft.com",
};

class AdalContext {
  private authContext: AuthenticationContext;
  
  constructor() {
      this.authContext = new AuthenticationContext(adalConfig);
  }

  get AuthContext() {
      return this.authContext;
  }

  public GetToken(): Promise<string | null> {
      return adalGetToken(this.authContext, endpoint);
  }

  public LogOut() {
      this.authContext.logOut();
  }
}

const adalContext: AdalContext = new AdalContext();
export default adalContext;

