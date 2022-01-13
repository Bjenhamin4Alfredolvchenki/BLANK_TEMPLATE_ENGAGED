var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// ../../node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "../../node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// ../../node_modules/remix/client.js
var require_client = __commonJS({
  "../../node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// ../../node_modules/remix/server.js
var require_server = __commonJS({
  "../../node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// ../../node_modules/remix/platform.js
var require_platform = __commonJS({
  "../../node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// ../../node_modules/remix/index.js
var require_remix = __commonJS({
  "../../node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/mnt/c/Users/adjes/OneDrive/Desktop/DEV_PORTAL/BLANK_TEMPLATE_ENGAGED/apps/blog/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-KLGXKVLU.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-JQQS6I75.css";

// route-module:/mnt/c/Users/adjes/OneDrive/Desktop/DEV_PORTAL/BLANK_TEMPLATE_ENGAGED/apps/blog/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    {
      rel: "stylesheet",
      href: dark_default,
      media: "(prefers-color-scheme: dark)"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix-app"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "remix-app__header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__header-content"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/",
    title: "Remix",
    className: "remix-app__header-home-link"
  }, /* @__PURE__ */ React.createElement(RemixLogo, null)), /* @__PURE__ */ React.createElement("nav", {
    "aria-label": "Main navigation",
    className: "remix-app__header-nav"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/docs"
  }, "Remix Docs")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/remix-run/remix"
  }, "GitHub")))))), /* @__PURE__ */ React.createElement("div", {
    className: "remix-app__main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__main-content"
  }, children)), /* @__PURE__ */ React.createElement("footer", {
    className: "remix-app__footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__footer-content"
  }, /* @__PURE__ */ React.createElement("p", null, "\xA9 You!"))));
}
function RemixLogo() {
  return /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 659 165",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-labelledby": "remix-run-logo-title",
    role: "img",
    width: "106",
    height: "30",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("title", {
    id: "remix-run-logo-title"
  }, "Remix Logo"), /* @__PURE__ */ React.createElement("path", {
    d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
  }));
}

// route-module:/mnt/c/Users/adjes/OneDrive/Desktop/DEV_PORTAL/BLANK_TEMPLATE_ENGAGED/apps/blog/app/routes/demos/actions.tsx
var actions_exports = {};
__export(actions_exports, {
  action: () => action,
  default: () => ActionsDemo,
  meta: () => meta
});
init_react();
var import_react = __toModule(require("react"));
var import_remix3 = __toModule(require_remix());
function meta() {
  return { title: "Actions Demo" };
}
var action = async ({ request }) => {
  let formData = await request.formData();
  let answer = formData.get("answer");
  if (typeof answer !== "string") {
    return (0, import_remix3.json)("Come on, at least try!", { status: 400 });
  }
  if (answer !== "egg") {
    return (0, import_remix3.json)(`Sorry, ${answer} is not right.`, { status: 400 });
  }
  return (0, import_remix3.redirect)("/demos/correct");
};
function ActionsDemo() {
  let actionMessage = (0, import_remix3.useActionData)();
  let answerRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (actionMessage && answerRef.current) {
      answerRef.current.select();
    }
  }, [actionMessage]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Actions!"), /* @__PURE__ */ React.createElement("p", null, "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations."), /* @__PURE__ */ React.createElement(import_remix3.Form, {
    method: "post",
    className: "remix__form"
  }, /* @__PURE__ */ React.createElement("h3", null, "Post an Action"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "What is more useful when it is broken?")), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("div", null, "Answer:"), /* @__PURE__ */ React.createElement("input", {
    ref: answerRef,
    name: "answer",
    type: "text"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", null, "Answer!")), actionMessage ? /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, actionMessage)) : null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h3", null, "Additional Resources"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Guide:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/guides/data-writes"
  }, "Data Writes")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/conventions#action"
  }, "Route Action Export")), /* @__PURE__ */ React.createElement("li", null, "API:", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/api/remix#useactiondata"
  }, /* @__PURE__ */ React.createElement("code", null, "useActionData"))))));
}

// route-module:/mnt/c/Users/adjes/OneDrive/Desktop/DEV_PORTAL/BLANK_TEMPLATE_ENGAGED/apps/blog/app/routes/demos/correct.tsx
var correct_exports = {};
__export(correct_exports, {
  default: () => NiceWork
});
init_react();
function NiceWork() {
  return /* @__PURE__ */ React.createElement("h1", null, "You got it right!");
}

// route-module:/mnt/c/Users/adjes/OneDrive/Desktop/DEV_PORTAL/BLANK_TEMPLATE_ENGAGED/apps/blog/app/routes/demos/params.tsx
var params_exports = {};
__export(params_exports, {
  default: () => Boundaries,
  meta: () => meta2
});
init_react();
var import_remix4 = __toModule(require_remix());
function meta2() {
  return { title: "Boundaries Demo" };
}
function Boundaries() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Click these Links"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "."
  }, "Start over")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "one"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "one"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "two"
  }, "Param: ", /* @__PURE__ */ React.createElement("i", null, "two"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "this-record-does-not-exist"
  }, "This will be a 404")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "shh-its-a-secret"
  }, "And this will be 401 Unauthorized")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "kaboom"
  }, "This one will throw an error")))));
}

// route-module:/mnt/c/Users/adjes/OneDrive/Desktop/DEV_PORTAL/BLANK_TEMPLATE_ENGAGED/apps/blog/app/routes/demos/params/index.tsx
var params_exports2 = {};
__export(params_exports2, {
  default: () => Boundaries2
});
init_react();
function Boundaries2() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Params"), /* @__PURE__ */ React.createElement("p", null, "When you name a route segment with $ like", " ", /* @__PURE__ */ React.createElement("code", null, "routes/users/$userId.js"), ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."), /* @__PURE__ */ React.createElement("h2", null, "Errors"), /* @__PURE__ */ React.createElement("p", null, "When a route throws and error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root."), /* @__PURE__ */ React.createElement("p", null, "So be as granular as you want with your error handling."), /* @__PURE__ */ React.createElement("h2", null, "Not Found"), /* @__PURE__ */ React.createElement("p", null, "(and other", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses"
  }, "client errors"), ")"), /* @__PURE__ */ React.createElement("p", null, "Loaders and Actions can throw a ", /* @__PURE__ */ React.createElement("code", null, "Response"), " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."));
}

// route-module:/mnt/c/Users/adjes/OneDrive/Desktop/DEV_PORTAL/BLANK_TEMPLATE_ENGAGED/apps/blog/app/routes/demos/params/$id.tsx
var id_exports = {};
__export(id_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => ParamDemo,
  loader: () => loader,
  meta: () => meta3
});
init_react();
var import_remix5 = __toModule(require_remix());
var loader = async ({ params }) => {
  if (params.id === "this-record-does-not-exist") {
    throw new Response("Not Found", { status: 404 });
  }
  if (params.id === "shh-its-a-secret") {
    throw (0, import_remix5.json)({ webmasterEmail: "hello@remix.run" }, { status: 401 });
  }
  if (params.id === "kaboom") {
    lol();
  }
  return { param: params.id };
};
function ParamDemo() {
  let data = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("h1", null, "The param is ", /* @__PURE__ */ React.createElement("i", {
    style: { color: "red" }
  }, data.param));
}
function CatchBoundary2() {
  let caught = (0, import_remix5.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (", caught.data.webmasterEmail, ") for access.");
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Looks like you tried to visit a page that does not exist.");
    default:
      message = /* @__PURE__ */ React.createElement("p", null, "There was a problem with your request!", /* @__PURE__ */ React.createElement("br", null), caught.status, " ", caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Oops!"), /* @__PURE__ */ React.createElement("p", null, message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
function ErrorBoundary2({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Error!"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
var meta3 = ({ data }) => {
  return {
    title: data ? `Param: ${data.param}` : "Oops..."
  };
};

// route-module:/mnt/c/Users/adjes/OneDrive/Desktop/DEV_PORTAL/BLANK_TEMPLATE_ENGAGED/apps/blog/app/routes/demos/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index,
  links: () => links2,
  meta: () => meta4
});
init_react();
var import_remix6 = __toModule(require_remix());

// app/styles/demos/about.css
var about_default = "/build/_assets/about-3FIUGRIX.css";

// route-module:/mnt/c/Users/adjes/OneDrive/Desktop/DEV_PORTAL/BLANK_TEMPLATE_ENGAGED/apps/blog/app/routes/demos/about.tsx
var meta4 = () => {
  return {
    title: "About Remix"
  };
};
var links2 = () => {
  return [{ rel: "stylesheet", href: about_default }];
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "about__intro"
  }, /* @__PURE__ */ React.createElement("h2", null, "About Us"), /* @__PURE__ */ React.createElement("p", null, "Ok, so this page isn't really ", /* @__PURE__ */ React.createElement("em", null, "about us"), ", but we did want to show you a few more things Remix can do."), /* @__PURE__ */ React.createElement("p", null, "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its", " ", /* @__PURE__ */ React.createElement("code", null, "links"), " export is only included on this route and its children."), /* @__PURE__ */ React.createElement("p", null, "Wait a sec...", /* @__PURE__ */ React.createElement("em", null, "its children"), "? To understand what we mean by this,", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://remix.run/tutorial/4-nested-routes-params"
  }, "read all about nested routes in the docs"), "."), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(import_remix6.Outlet, null)));
}

// route-module:/mnt/c/Users/adjes/OneDrive/Desktop/DEV_PORTAL/BLANK_TEMPLATE_ENGAGED/apps/blog/app/routes/demos/about/index.tsx
var about_exports2 = {};
__export(about_exports2, {
  default: () => AboutIndex
});
init_react();
var import_remix7 = __toModule(require_remix());
function AboutIndex() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "You are looking at the index route for the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " URL segment, but there are nested routes as well!"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "whoa"
  }, "Check out one of them here."))));
}

// route-module:/mnt/c/Users/adjes/OneDrive/Desktop/DEV_PORTAL/BLANK_TEMPLATE_ENGAGED/apps/blog/app/routes/demos/about/whoa.tsx
var whoa_exports = {};
__export(whoa_exports, {
  default: () => AboutIndex2
});
init_react();
var import_remix8 = __toModule(require_remix());
function AboutIndex2() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Whoa, this is a nested route! We render the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " layout route component, and its ", /* @__PURE__ */ React.createElement("code", null, "Outlet"), " renders our route component. \u{1F92F}"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: ".."
  }, "Go back to the ", /* @__PURE__ */ React.createElement("code", null, "/about"), " index."))));
}

// route-module:/mnt/c/Users/adjes/OneDrive/Desktop/DEV_PORTAL/BLANK_TEMPLATE_ENGAGED/apps/blog/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  loader: () => loader2,
  meta: () => meta5
});
init_react();
var import_remix9 = __toModule(require_remix());
var import_ui = __toModule(require("ui"));
var loader2 = () => {
  let data = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs"
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs"
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d"
      }
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions"
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading"
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries"
      }
    ]
  };
  return (0, import_remix9.json)(data);
};
var meta5 = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
function Index2() {
  let data = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h2", null, "Welcome to Remix!"), /* @__PURE__ */ React.createElement("p", null, "We're stoked that you're here. \u{1F973}"), /* @__PURE__ */ React.createElement("p", null, "Feel free to take a look around the code to see how Remix does things, it might be a bit different than what you\u2019re used to. When you're ready to dive deeper, we've got plenty of resources to get you up-and-running quickly."), /* @__PURE__ */ React.createElement("p", null, "Check out all the demos in this starter, and then just delete the", " ", /* @__PURE__ */ React.createElement("code", null, "app/routes/demos"), " and ", /* @__PURE__ */ React.createElement("code", null, "app/styles/demos"), " ", "folders when you're ready to turn this into your next project.")), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement("h2", null, "Demos In This App"), /* @__PURE__ */ React.createElement("ul", null, data.demos.map((demo) => /* @__PURE__ */ React.createElement("li", {
    key: demo.to,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: demo.to,
    prefetch: "intent"
  }, demo.name)))), /* @__PURE__ */ React.createElement("h2", null, "Resources"), /* @__PURE__ */ React.createElement("ul", null, data.resources.map((resource) => /* @__PURE__ */ React.createElement("li", {
    key: resource.url,
    className: "remix__page__resource"
  }, /* @__PURE__ */ React.createElement("a", {
    href: resource.url
  }, resource.name))))), /* @__PURE__ */ React.createElement(import_ui.CounterButton, null));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/demos/actions": {
    id: "routes/demos/actions",
    parentId: "root",
    path: "demos/actions",
    index: void 0,
    caseSensitive: void 0,
    module: actions_exports
  },
  "routes/demos/correct": {
    id: "routes/demos/correct",
    parentId: "root",
    path: "demos/correct",
    index: void 0,
    caseSensitive: void 0,
    module: correct_exports
  },
  "routes/demos/params": {
    id: "routes/demos/params",
    parentId: "root",
    path: "demos/params",
    index: void 0,
    caseSensitive: void 0,
    module: params_exports
  },
  "routes/demos/params/index": {
    id: "routes/demos/params/index",
    parentId: "routes/demos/params",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: params_exports2
  },
  "routes/demos/params/$id": {
    id: "routes/demos/params/$id",
    parentId: "routes/demos/params",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/demos/about": {
    id: "routes/demos/about",
    parentId: "root",
    path: "demos/about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/demos/about/index": {
    id: "routes/demos/about/index",
    parentId: "routes/demos/about",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: about_exports2
  },
  "routes/demos/about/whoa": {
    id: "routes/demos/about/whoa",
    parentId: "routes/demos/about",
    path: "whoa",
    index: void 0,
    caseSensitive: void 0,
    module: whoa_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9tbnQvYy9Vc2Vycy9hZGplcy9PbmVEcml2ZS9EZXNrdG9wL0RFVl9QT1JUQUwvQkxBTktfVEVNUExBVEVfRU5HQUdFRC9hcHBzL2Jsb2cvYXBwL3Jvb3QudHN4IiwgInJvdXRlLW1vZHVsZTovbW50L2MvVXNlcnMvYWRqZXMvT25lRHJpdmUvRGVza3RvcC9ERVZfUE9SVEFML0JMQU5LX1RFTVBMQVRFX0VOR0FHRUQvYXBwcy9ibG9nL2FwcC9yb3V0ZXMvZGVtb3MvYWN0aW9ucy50c3giLCAicm91dGUtbW9kdWxlOi9tbnQvYy9Vc2Vycy9hZGplcy9PbmVEcml2ZS9EZXNrdG9wL0RFVl9QT1JUQUwvQkxBTktfVEVNUExBVEVfRU5HQUdFRC9hcHBzL2Jsb2cvYXBwL3JvdXRlcy9kZW1vcy9jb3JyZWN0LnRzeCIsICJyb3V0ZS1tb2R1bGU6L21udC9jL1VzZXJzL2FkamVzL09uZURyaXZlL0Rlc2t0b3AvREVWX1BPUlRBTC9CTEFOS19URU1QTEFURV9FTkdBR0VEL2FwcHMvYmxvZy9hcHAvcm91dGVzL2RlbW9zL3BhcmFtcy50c3giLCAicm91dGUtbW9kdWxlOi9tbnQvYy9Vc2Vycy9hZGplcy9PbmVEcml2ZS9EZXNrdG9wL0RFVl9QT1JUQUwvQkxBTktfVEVNUExBVEVfRU5HQUdFRC9hcHBzL2Jsb2cvYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovbW50L2MvVXNlcnMvYWRqZXMvT25lRHJpdmUvRGVza3RvcC9ERVZfUE9SVEFML0JMQU5LX1RFTVBMQVRFX0VOR0FHRUQvYXBwcy9ibG9nL2FwcC9yb3V0ZXMvZGVtb3MvcGFyYW1zLyRpZC50c3giLCAicm91dGUtbW9kdWxlOi9tbnQvYy9Vc2Vycy9hZGplcy9PbmVEcml2ZS9EZXNrdG9wL0RFVl9QT1JUQUwvQkxBTktfVEVNUExBVEVfRU5HQUdFRC9hcHBzL2Jsb2cvYXBwL3JvdXRlcy9kZW1vcy9hYm91dC50c3giLCAicm91dGUtbW9kdWxlOi9tbnQvYy9Vc2Vycy9hZGplcy9PbmVEcml2ZS9EZXNrdG9wL0RFVl9QT1JUQUwvQkxBTktfVEVNUExBVEVfRU5HQUdFRC9hcHBzL2Jsb2cvYXBwL3JvdXRlcy9kZW1vcy9hYm91dC9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9tbnQvYy9Vc2Vycy9hZGplcy9PbmVEcml2ZS9EZXNrdG9wL0RFVl9QT1JUQUwvQkxBTktfVEVNUExBVEVfRU5HQUdFRC9hcHBzL2Jsb2cvYXBwL3JvdXRlcy9kZW1vcy9hYm91dC93aG9hLnRzeCIsICJyb3V0ZS1tb2R1bGU6L21udC9jL1VzZXJzL2FkamVzL09uZURyaXZlL0Rlc2t0b3AvREVWX1BPUlRBTC9CTEFOS19URU1QTEFURV9FTkdBR0VEL2FwcHMvYmxvZy9hcHAvcm91dGVzL2luZGV4LnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL21udC9jL1VzZXJzL2FkamVzL09uZURyaXZlL0Rlc2t0b3AvREVWX1BPUlRBTC9CTEFOS19URU1QTEFURV9FTkdBR0VEL2FwcHMvYmxvZy9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvbW50L2MvVXNlcnMvYWRqZXMvT25lRHJpdmUvRGVza3RvcC9ERVZfUE9SVEFML0JMQU5LX1RFTVBMQVRFX0VOR0FHRUQvYXBwcy9ibG9nL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvbW50L2MvVXNlcnMvYWRqZXMvT25lRHJpdmUvRGVza3RvcC9ERVZfUE9SVEFML0JMQU5LX1RFTVBMQVRFX0VOR0FHRUQvYXBwcy9ibG9nL2FwcC9yb3V0ZXMvZGVtb3MvYWN0aW9ucy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL21udC9jL1VzZXJzL2FkamVzL09uZURyaXZlL0Rlc2t0b3AvREVWX1BPUlRBTC9CTEFOS19URU1QTEFURV9FTkdBR0VEL2FwcHMvYmxvZy9hcHAvcm91dGVzL2RlbW9zL2NvcnJlY3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9tbnQvYy9Vc2Vycy9hZGplcy9PbmVEcml2ZS9EZXNrdG9wL0RFVl9QT1JUQUwvQkxBTktfVEVNUExBVEVfRU5HQUdFRC9hcHBzL2Jsb2cvYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9tbnQvYy9Vc2Vycy9hZGplcy9PbmVEcml2ZS9EZXNrdG9wL0RFVl9QT1JUQUwvQkxBTktfVEVNUExBVEVfRU5HQUdFRC9hcHBzL2Jsb2cvYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9tbnQvYy9Vc2Vycy9hZGplcy9PbmVEcml2ZS9EZXNrdG9wL0RFVl9QT1JUQUwvQkxBTktfVEVNUExBVEVfRU5HQUdFRC9hcHBzL2Jsb2cvYXBwL3JvdXRlcy9kZW1vcy9wYXJhbXMvJGlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvbW50L2MvVXNlcnMvYWRqZXMvT25lRHJpdmUvRGVza3RvcC9ERVZfUE9SVEFML0JMQU5LX1RFTVBMQVRFX0VOR0FHRUQvYXBwcy9ibG9nL2FwcC9yb3V0ZXMvZGVtb3MvYWJvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9tbnQvYy9Vc2Vycy9hZGplcy9PbmVEcml2ZS9EZXNrdG9wL0RFVl9QT1JUQUwvQkxBTktfVEVNUExBVEVfRU5HQUdFRC9hcHBzL2Jsb2cvYXBwL3JvdXRlcy9kZW1vcy9hYm91dC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL21udC9jL1VzZXJzL2FkamVzL09uZURyaXZlL0Rlc2t0b3AvREVWX1BPUlRBTC9CTEFOS19URU1QTEFURV9FTkdBR0VEL2FwcHMvYmxvZy9hcHAvcm91dGVzL2RlbW9zL2Fib3V0L3dob2EudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9tbnQvYy9Vc2Vycy9hZGplcy9PbmVEcml2ZS9EZXNrdG9wL0RFVl9QT1JUQUwvQkxBTktfVEVNUExBVEVfRU5HQUdFRC9hcHBzL2Jsb2cvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2RlbW9zL2FjdGlvbnNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kZW1vcy9hY3Rpb25zXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiZGVtb3MvYWN0aW9uc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2RlbW9zL2NvcnJlY3RcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kZW1vcy9jb3JyZWN0XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiZGVtb3MvY29ycmVjdFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2RlbW9zL3BhcmFtc1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtc1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImRlbW9zL3BhcmFtc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL2RlbW9zL3BhcmFtcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9kZW1vcy9wYXJhbXNcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzL2RlbW9zL3BhcmFtcy8kaWRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kZW1vcy9wYXJhbXMvJGlkXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RlbW9zL3BhcmFtc1wiLFxuICAgIHBhdGg6IFwiOmlkXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTVcbiAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvYWJvdXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kZW1vcy9hYm91dFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImRlbW9zL2Fib3V0XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTZcbiAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvYWJvdXQvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kZW1vcy9hYm91dC9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9kZW1vcy9hYm91dFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTdcbiAgfSxcbiAgXCJyb3V0ZXMvZGVtb3MvYWJvdXQvd2hvYVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RlbW9zL2Fib3V0L3dob2FcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZGVtb3MvYWJvdXRcIixcbiAgICBwYXRoOiBcIndob2FcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOFxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTlcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xyXG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcclxuICByZXF1ZXN0OiBSZXF1ZXN0LFxyXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxyXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcclxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxyXG4pIHtcclxuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXHJcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxyXG4gICk7XHJcblxyXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XHJcblxyXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xyXG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXHJcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXHJcbiAgfSk7XHJcbn1cclxuIiwgImltcG9ydCB7XHJcbiAgTGluayxcclxuICBMaW5rcyxcclxuICBMaXZlUmVsb2FkLFxyXG4gIE1ldGEsXHJcbiAgT3V0bGV0LFxyXG4gIFNjcmlwdHMsXHJcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXHJcbiAgdXNlQ2F0Y2gsXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xyXG5pbXBvcnQgZGFya1N0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZGFyay5jc3NcIjtcclxuXHJcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9hcHAjbGlua3NcclxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gW1xyXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBnbG9iYWxTdHlsZXNVcmwgfSxcclxuICAgIHtcclxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgaHJlZjogZGFya1N0eWxlc1VybCxcclxuICAgICAgbWVkaWE6IFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2RlZmF1bHQtZXhwb3J0XHJcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNyb3V0ZS1maWxlbmFtZXNcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RG9jdW1lbnQ+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvRG9jdW1lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vZG9jcy9lbi92MS9hcGkvY29udmVudGlvbnMjZXJyb3Jib3VuZGFyeVxyXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcclxuICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICByZXR1cm4gKFxyXG4gICAgPERvY3VtZW50IHRpdGxlPVwiRXJyb3IhXCI+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT5UaGVyZSB3YXMgYW4gZXJyb3I8L2gxPlxyXG4gICAgICAgICAgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgSGV5LCBkZXZlbG9wZXIsIHlvdSBzaG91bGQgcmVwbGFjZSB0aGlzIHdpdGggd2hhdCB5b3Ugd2FudCB5b3VyXHJcbiAgICAgICAgICAgIHVzZXJzIHRvIHNlZS5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L0RvY3VtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2RvY3MvZW4vdjEvYXBpL2NvbnZlbnRpb25zI2NhdGNoYm91bmRhcnlcclxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XHJcbiAgbGV0IGNhdWdodCA9IHVzZUNhdGNoKCk7XHJcblxyXG4gIGxldCBtZXNzYWdlO1xyXG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xyXG4gICAgY2FzZSA0MDE6XHJcbiAgICAgIG1lc3NhZ2UgPSAoXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBPb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCB5b3UgZG8gbm90IGhhdmUgYWNjZXNzXHJcbiAgICAgICAgICB0by5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA0MDQ6XHJcbiAgICAgIG1lc3NhZ2UgPSAoXHJcbiAgICAgICAgPHA+T29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgZG9lcyBub3QgZXhpc3QuPC9wPlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY2F1Z2h0LmRhdGEgfHwgY2F1Z2h0LnN0YXR1c1RleHQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c306IHtjYXVnaHQuc3RhdHVzVGV4dH1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIHttZXNzYWdlfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvRG9jdW1lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRG9jdW1lbnQoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHRpdGxlLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICB0aXRsZT86IHN0cmluZztcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgPGhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAge3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XHJcbiAgICAgICAgPE1ldGEgLz5cclxuICAgICAgICA8TGlua3MgLz5cclxuICAgICAgPC9oZWFkPlxyXG4gICAgICA8Ym9keT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaXgtYXBwXCI+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVtaXgtYXBwX19oZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZW1peC1hcHBfX2hlYWRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICA8TGluayB0bz1cIi9cIiB0aXRsZT1cIlJlbWl4XCIgY2xhc3NOYW1lPVwicmVtaXgtYXBwX19oZWFkZXItaG9tZS1saW5rXCI+XHJcbiAgICAgICAgICAgIDxSZW1peExvZ28gLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIk1haW4gbmF2aWdhdGlvblwiIGNsYXNzTmFtZT1cInJlbWl4LWFwcF9faGVhZGVyLW5hdlwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9kb2NzXCI+UmVtaXggRG9jczwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmVtaXgtcnVuL3JlbWl4XCI+R2l0SHViPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaXgtYXBwX19tYWluXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmVtaXgtYXBwX19tYWluLWNvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInJlbWl4LWFwcF9fZm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmVtaXgtYXBwX19mb290ZXItY29udGVudFwiPlxyXG4gICAgICAgICAgPHA+JmNvcHk7IFlvdSE8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmVtaXhMb2dvKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjU5IDE2NVwiXHJcbiAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJyZW1peC1ydW4tbG9nby10aXRsZVwiXHJcbiAgICAgIHJvbGU9XCJpbWdcIlxyXG4gICAgICB3aWR0aD1cIjEwNlwiXHJcbiAgICAgIGhlaWdodD1cIjMwXCJcclxuICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICA+XHJcbiAgICAgIDx0aXRsZSBpZD1cInJlbWl4LXJ1bi1sb2dvLXRpdGxlXCI+UmVtaXggTG9nbzwvdGl0bGU+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMCAxNjFWMTM2SDQ1LjU0MTZDNTMuMTQ4NiAxMzYgNTQuODAwMyAxNDEuNjM4IDU0LjgwMDMgMTQ1VjE2MUgwWiBNMTMzLjg1IDEyNC4xNkMxMzUuMyAxNDIuNzYyIDEzNS4zIDE1MS40ODIgMTM1LjMgMTYxSDkyLjIyODNDOTIuMjI4MyAxNTguOTI3IDkyLjI2NTMgMTU3LjAzIDkyLjMwMjggMTU1LjEwN0M5Mi40MTk1IDE0OS4xMjggOTIuNTQxMSAxNDIuODk0IDkxLjU3MTcgMTMwLjMwNEM5MC4yOTA1IDExMS44NzIgODIuMzQ3MyAxMDcuNzc2IDY3Ljc0MTkgMTA3Ljc3Nkg1NC44MDIxSDBWNzQuMjRINjkuNzkxOEM4OC4yNDA3IDc0LjI0IDk3LjQ2NTEgNjguNjMyIDk3LjQ2NTEgNTMuNzg0Qzk3LjQ2NTEgNDAuNzI4IDg4LjI0MDcgMzIuODE2IDY5Ljc5MTggMzIuODE2SDBWMEg3Ny40Nzg4QzExOS4yNDUgMCAxNDAgMTkuNzEyIDE0MCA1MS4yQzE0MCA3NC43NTIgMTI1LjM5NSA5MC4xMTIgMTA1LjY2NSA5Mi42NzJDMTIyLjMyIDk2IDEzMi4wNTcgMTA1LjQ3MiAxMzMuODUgMTI0LjE2WlwiIC8+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMjI5LjQzIDEyMC41NzZDMjI1LjU5IDEyOS41MzYgMjE4LjQyMiAxMzMuMzc2IDIwNy4xNTggMTMzLjM3NkMxOTQuNjE0IDEzMy4zNzYgMTg0LjM3NCAxMjYuNzIgMTgzLjM1IDExMi42NEgyNjMuNDc4VjEwMS4xMkMyNjMuNDc4IDcwLjE0MzcgMjQzLjI1NCA0NC4wMzE3IDIwNS4xMSA0NC4wMzE3QzE2OS41MjYgNDQuMDMxNyAxNDIuOTAyIDY5Ljg4NzcgMTQyLjkwMiAxMDUuOTg0QzE0Mi45MDIgMTQyLjMzNiAxNjkuMDE0IDE2NC4zNTIgMjA1LjYyMiAxNjQuMzUyQzIzNS44MyAxNjQuMzUyIDI1Ni44MjIgMTQ5Ljc2IDI2Mi43MSAxMjMuNjQ4TDIyOS40MyAxMjAuNTc2Wk0xODMuODYyIDkyLjY3MTdDMTg1LjM5OCA4MS45MTk3IDE5MS4yODYgNzMuNzI3NyAyMDQuNTk4IDczLjcyNzdDMjE2Ljg4NiA3My43Mjc3IDIyMy41NDIgODIuNDMxNyAyMjQuMDU0IDkyLjY3MTdIMTgzLjg2MlpcIiAvPlxyXG4gICAgICA8cGF0aCBkPVwiTTM4NS4yNTYgNjYuNTU5N0MzODAuMzkyIDUzLjI0NzcgMzY5Ljg5NiA0NC4wMzE3IDM0OS42NzIgNDQuMDMxN0MzMzIuNTIgNDQuMDMxNyAzMjAuMjMyIDUxLjcxMTcgMzE0LjA4OCA2NC4yNTU3VjQ3LjEwMzdIMjcyLjYxNlYxNjEuMjhIMzE0LjA4OFYxMDUuMjE2QzMxNC4wODggODguMDYzOCAzMTguOTUyIDc2Ljc5OTcgMzMyLjUyIDc2Ljc5OTdDMzQ1LjA2NCA3Ni43OTk3IDM0OC4xMzYgODQuOTkxNyAzNDguMTM2IDEwMC42MDhWMTYxLjI4SDM4OS42MDhWMTA1LjIxNkMzODkuNjA4IDg4LjA2MzggMzk0LjIxNiA3Ni43OTk3IDQwOC4wNCA3Ni43OTk3QzQyMC41ODQgNzYuNzk5NyA0MjMuNCA4NC45OTE3IDQyMy40IDEwMC42MDhWMTYxLjI4SDQ2NC44NzJWODkuNTk5N0M0NjQuODcyIDY1Ljc5MTcgNDU1LjY1NiA0NC4wMzE3IDQyNC4xNjggNDQuMDMxN0M0MDQuOTY4IDQ0LjAzMTcgMzkxLjQgNTMuNzU5NyAzODUuMjU2IDY2LjU1OTdaXCIgLz5cclxuICAgICAgPHBhdGggZD1cIk00NzguNDM2IDQ3LjEwNFYxNjEuMjhINTE5LjkwOFY0Ny4xMDRINDc4LjQzNlpNNDc4LjE4IDM2LjM1Mkg1MjAuMTY0VjBINDc4LjE4VjM2LjM1MlpcIiAvPlxyXG4gICAgICA8cGF0aCBkPVwiTTY1NC41NCA0Ny4xMDM1SDYxMS43ODhMNTkyLjMzMiA3NC4yMzk1TDU3My4zODggNDcuMTAzNUg1MjcuNTY0TDU2OC43OCAxMDMuMTY4TDUyMy45OCAxNjEuMjhINTY2LjczMkw1ODkuNTE2IDEzMC4zMDRMNjEyLjMgMTYxLjI4SDY1OC4xMjRMNjEzLjA2OCAxMDEuMzc2TDY1NC41NCA0Ny4xMDM1WlwiIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IEZvcm0sIGpzb24sIHVzZUFjdGlvbkRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcclxuICByZXR1cm4geyB0aXRsZTogXCJBY3Rpb25zIERlbW9cIiB9O1xyXG59XHJcblxyXG4vLyBXaGVuIHlvdXIgZm9ybSBzZW5kcyBhIFBPU1QsIHRoZSBhY3Rpb24gaXMgY2FsbGVkIG9uIHRoZSBzZXJ2ZXIuXHJcbi8vIC0gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2FjdGlvblxyXG4vLyAtIGh0dHBzOi8vcmVtaXgucnVuL2d1aWRlcy9kYXRhLXVwZGF0ZXNcclxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XHJcbiAgbGV0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xyXG4gIGxldCBhbnN3ZXIgPSBmb3JtRGF0YS5nZXQoXCJhbnN3ZXJcIik7XHJcblxyXG4gIC8vIFR5cGljYWwgYWN0aW9uIHdvcmtmbG93cyBzdGFydCB3aXRoIHZhbGlkYXRpbmcgdGhlIGZvcm0gZGF0YSB0aGF0IGp1c3QgY2FtZVxyXG4gIC8vIG92ZXIgdGhlIG5ldHdvcmsuIENsaWVudHNpZGUgdmFsaWRhdGlvbiBpcyBmaW5lLCBidXQgeW91IGRlZmluaXRlbHkgbmVlZCBpdFxyXG4gIC8vIHNlcnZlciBzaWRlLiAgSWYgdGhlcmUncyBhIHByb2JsZW0sIHJldHVybiB0aGUgdGhlIGRhdGEgYW5kIHRoZSBjb21wb25lbnRcclxuICAvLyBjYW4gcmVuZGVyIGl0LlxyXG4gIGlmICh0eXBlb2YgYW5zd2VyICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4ganNvbihcIkNvbWUgb24sIGF0IGxlYXN0IHRyeSFcIiwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICB9XHJcblxyXG4gIGlmIChhbnN3ZXIgIT09IFwiZWdnXCIpIHtcclxuICAgIHJldHVybiBqc29uKGBTb3JyeSwgJHthbnN3ZXJ9IGlzIG5vdCByaWdodC5gLCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gRmluYWxseSwgaWYgdGhlIGRhdGEgaXMgdmFsaWQsIHlvdSdsbCB0eXBpY2FsbHkgd3JpdGUgdG8gYSBkYXRhYmFzZSBvciBzZW5kIG9yXHJcbiAgLy8gZW1haWwgb3IgbG9nIHRoZSB1c2VyIGluLCBldGMuIEl0J3MgcmVjb21tZW5kZWQgdG8gcmVkaXJlY3QgYWZ0ZXIgYVxyXG4gIC8vIHN1Y2Nlc3NmdWwgYWN0aW9uLCBldmVuIGlmIGl0J3MgdG8gdGhlIHNhbWUgcGxhY2Ugc28gdGhhdCBub24tSmF2YVNjcmlwdCB3b3JrZmxvd3NcclxuICAvLyBmcm9tIHRoZSBicm93c2VyIGRvZXNuJ3QgcmVwb3N0IHRoZSBkYXRhIGlmIHRoZSB1c2VyIGNsaWNrcyBiYWNrLlxyXG4gIHJldHVybiByZWRpcmVjdChcIi9kZW1vcy9jb3JyZWN0XCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aW9uc0RlbW8oKSB7XHJcbiAgLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I3VzZWFjdGlvbmRhdGFcclxuICBsZXQgYWN0aW9uTWVzc2FnZSA9IHVzZUFjdGlvbkRhdGE8c3RyaW5nPigpO1xyXG4gIGxldCBhbnN3ZXJSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIC8vIFRoaXMgZm9ybSB3b3JrcyB3aXRob3V0IEphdmFTY3JpcHQsIGJ1dCB3aGVuIHdlIGhhdmUgSmF2YVNjcmlwdCB3ZSBjYW4gbWFrZVxyXG4gIC8vIHRoZSBleHBlcmllbmNlIGJldHRlciBieSBzZWxlY3RpbmcgdGhlIGlucHV0IG9uIHdyb25nIGFuc3dlcnMhIEdvIGFoZWFkLCBkaXNhYmxlXHJcbiAgLy8gSmF2YVNjcmlwdCBpbiB5b3VyIGJyb3dzZXIgYW5kIHNlZSB3aGF0IGhhcHBlbnMuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY3Rpb25NZXNzYWdlICYmIGFuc3dlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGFuc3dlclJlZi5jdXJyZW50LnNlbGVjdCgpO1xyXG4gICAgfVxyXG4gIH0sIFthY3Rpb25NZXNzYWdlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbWl4X19wYWdlXCI+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMj5BY3Rpb25zITwvaDI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBUaGlzIGZvcm0gc3VibWlzc2lvbiB3aWxsIHNlbmQgYSBwb3N0IHJlcXVlc3QgdGhhdCB3ZSBoYW5kbGUgaW4gb3VyXHJcbiAgICAgICAgICBgYWN0aW9uYCBleHBvcnQuIEFueSByb3V0ZSBjYW4gZXhwb3J0IGFuIGFjdGlvbiB0byBoYW5kbGUgZGF0YVxyXG4gICAgICAgICAgbXV0YXRpb25zLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwicmVtaXhfX2Zvcm1cIj5cclxuICAgICAgICAgIDxoMz5Qb3N0IGFuIEFjdGlvbjwvaDM+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGk+V2hhdCBpcyBtb3JlIHVzZWZ1bCB3aGVuIGl0IGlzIGJyb2tlbj88L2k+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXY+QW5zd2VyOjwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgcmVmPXthbnN3ZXJSZWZ9IG5hbWU9XCJhbnN3ZXJcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbj5BbnN3ZXIhPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHthY3Rpb25NZXNzYWdlID8gKFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8Yj57YWN0aW9uTWVzc2FnZX08L2I+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPGFzaWRlPlxyXG4gICAgICAgIDxoMz5BZGRpdGlvbmFsIFJlc291cmNlczwvaDM+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICBHdWlkZTp7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9ndWlkZXMvZGF0YS13cml0ZXNcIj5EYXRhIFdyaXRlczwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIEFQSTp7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjYWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgUm91dGUgQWN0aW9uIEV4cG9ydFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICBBUEk6e1wiIFwifVxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I3VzZWFjdGlvbmRhdGFcIj5cclxuICAgICAgICAgICAgICA8Y29kZT51c2VBY3Rpb25EYXRhPC9jb2RlPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvYXNpZGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOaWNlV29yaygpIHtcclxuICByZXR1cm4gPGgxPllvdSBnb3QgaXQgcmlnaHQhPC9oMT47XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUNhdGNoLCBMaW5rLCBqc29uLCB1c2VMb2FkZXJEYXRhLCBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xyXG4gIHJldHVybiB7IHRpdGxlOiBcIkJvdW5kYXJpZXMgRGVtb1wiIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvdW5kYXJpZXMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtaXhfX3BhZ2VcIj5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8YXNpZGU+XHJcbiAgICAgICAgPGgyPkNsaWNrIHRoZXNlIExpbmtzPC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiLlwiPlN0YXJ0IG92ZXI8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIm9uZVwiPlxyXG4gICAgICAgICAgICAgIFBhcmFtOiA8aT5vbmU8L2k+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwidHdvXCI+XHJcbiAgICAgICAgICAgICAgUGFyYW06IDxpPnR3bzwvaT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgdG89XCJ0aGlzLXJlY29yZC1kb2VzLW5vdC1leGlzdFwiPlRoaXMgd2lsbCBiZSBhIDQwNDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwic2hoLWl0cy1hLXNlY3JldFwiPkFuZCB0aGlzIHdpbGwgYmUgNDAxIFVuYXV0aG9yaXplZDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwia2Fib29tXCI+VGhpcyBvbmUgd2lsbCB0aHJvdyBhbiBlcnJvcjwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9hc2lkZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZUNhdGNoLCBMaW5rLCBqc29uLCB1c2VMb2FkZXJEYXRhLCBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm91bmRhcmllcygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgyPlBhcmFtczwvaDI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFdoZW4geW91IG5hbWUgYSByb3V0ZSBzZWdtZW50IHdpdGggJCBsaWtle1wiIFwifVxyXG4gICAgICAgIDxjb2RlPnJvdXRlcy91c2Vycy8kdXNlcklkLmpzPC9jb2RlPiwgdGhlICQgc2VnbWVudCB3aWxsIGJlIHBhcnNlZCBmcm9tXHJcbiAgICAgICAgdGhlIFVSTCBhbmQgc2VudCB0byB5b3VyIGxvYWRlcnMgYW5kIGFjdGlvbnMgYnkgdGhlIHNhbWUgbmFtZS5cclxuICAgICAgPC9wPlxyXG4gICAgICA8aDI+RXJyb3JzPC9oMj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgV2hlbiBhIHJvdXRlIHRocm93cyBhbmQgZXJyb3IgaW4gaXQncyBhY3Rpb24sIGxvYWRlciwgb3IgY29tcG9uZW50LFxyXG4gICAgICAgIFJlbWl4IGF1dG9tYXRpY2FsbHkgY2F0Y2hlcyBpdCwgd29uJ3QgZXZlbiB0cnkgdG8gcmVuZGVyIHRoZSBjb21wb25lbnQsXHJcbiAgICAgICAgYnV0IGl0IHdpbGwgcmVuZGVyIHRoZSByb3V0ZSdzIEVycm9yQm91bmRhcnkgaW5zdGVhZC4gSWYgdGhlIHJvdXRlXHJcbiAgICAgICAgZG9lc24ndCBoYXZlIG9uZSwgaXQgd2lsbCBidWJibGUgdXAgdG8gdGhlIHJvdXRlcyBhYm92ZSBpdCB1bnRpbCBpdCBoaXRzXHJcbiAgICAgICAgdGhlIHJvb3QuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+U28gYmUgYXMgZ3JhbnVsYXIgYXMgeW91IHdhbnQgd2l0aCB5b3VyIGVycm9yIGhhbmRsaW5nLjwvcD5cclxuICAgICAgPGgyPk5vdCBGb3VuZDwvaDI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIChhbmQgb3RoZXJ7XCIgXCJ9XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvU3RhdHVzI2NsaWVudF9lcnJvcl9yZXNwb25zZXNcIj5cclxuICAgICAgICAgIGNsaWVudCBlcnJvcnNcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgKVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIExvYWRlcnMgYW5kIEFjdGlvbnMgY2FuIHRocm93IGEgPGNvZGU+UmVzcG9uc2U8L2NvZGU+IGluc3RlYWQgb2YgYW5cclxuICAgICAgICBlcnJvciBhbmQgUmVtaXggd2lsbCByZW5kZXIgdGhlIENhdGNoQm91bmRhcnkgaW5zdGVhZCBvZiB0aGUgY29tcG9uZW50LlxyXG4gICAgICAgIFRoaXMgaXMgZ3JlYXQgd2hlbiBsb2FkaW5nIGRhdGEgZnJvbSBhIGRhdGFiYXNlIGlzbid0IGZvdW5kLiBBcyBzb29uIGFzXHJcbiAgICAgICAgeW91IGtub3cgeW91IGNhbid0IHJlbmRlciB0aGUgY29tcG9uZW50IG5vcm1hbGx5LCB0aHJvdyBhIDQwNCByZXNwb25zZVxyXG4gICAgICAgIGFuZCBzZW5kIHlvdXIgYXBwIGludG8gdGhlIGNhdGNoIGJvdW5kYXJ5LiBKdXN0IGxpa2UgZXJyb3IgYm91bmRhcmllcyxcclxuICAgICAgICBjYXRjaCBib3VuZGFyaWVzIGJ1YmJsZSwgdG9vLlxyXG4gICAgICA8L3A+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VDYXRjaCwgTGluaywganNvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbi8vIFRoZSBgJGAgaW4gcm91dGUgZmlsZW5hbWVzIGJlY29tZXMgYSBwYXR0ZXJuIHRoYXQncyBwYXJzZWQgZnJvbSB0aGUgVVJMIGFuZFxyXG4vLyBwYXNzZWQgdG8geW91ciBsb2FkZXJzIHNvIHlvdSBjYW4gbG9vayB1cCBkYXRhLlxyXG4vLyAtIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNsb2FkZXItcGFyYW1zXHJcbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgLy8gcHJldGVuZCBsaWtlIHdlJ3JlIHVzaW5nIHBhcmFtcy5pZCB0byBsb29rIHNvbWV0aGluZyB1cCBpbiB0aGUgZGJcclxuXHJcbiAgaWYgKHBhcmFtcy5pZCA9PT0gXCJ0aGlzLXJlY29yZC1kb2VzLW5vdC1leGlzdFwiKSB7XHJcbiAgICAvLyBJZiB0aGUgcmVjb3JkIGRvZXNuJ3QgZXhpc3Qgd2UgY2FuJ3QgcmVuZGVyIHRoZSByb3V0ZSBub3JtYWxseSwgc29cclxuICAgIC8vIGluc3RlYWQgd2UgdGhyb3cgYSA0MDQgcmVwb25zZSB0byBzdG9wIHJ1bm5pbmcgY29kZSBoZXJlIGFuZCBzaG93IHRoZVxyXG4gICAgLy8gdXNlciB0aGUgY2F0Y2ggYm91bmRhcnkuXHJcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoXCJOb3QgRm91bmRcIiwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICB9XHJcblxyXG4gIC8vIG5vdyBwcmV0ZW5kIGxpa2UgdGhlIHJlY29yZCBleGlzdHMgYnV0IHRoZSB1c2VyIGp1c3QgaXNuJ3QgYXV0aG9yaXplZCB0b1xyXG4gIC8vIHNlZSBpdC5cclxuICBpZiAocGFyYW1zLmlkID09PSBcInNoaC1pdHMtYS1zZWNyZXRcIikge1xyXG4gICAgLy8gQWdhaW4sIHdlIGNhbid0IHJlbmRlciB0aGUgY29tcG9uZW50IGlmIHRoZSB1c2VyIGlzbid0IGF1dGhvcml6ZWQuIFlvdVxyXG4gICAgLy8gY2FuIGV2ZW4gcHV0IGRhdGEgaW4gdGhlIHJlc3BvbnNlIHRoYXQgbWlnaHQgaGVscCB0aGUgdXNlciByZWN0aWZ5IHRoZVxyXG4gICAgLy8gaXNzdWUhIExpa2UgZW1haWxpbmcgdGhlIHdlYm1hc3RlciBmb3IgYWNjZXNzIHRvIHRoZSBwYWdlLiAoT2gsIHJpZ2h0LFxyXG4gICAgLy8gYGpzb25gIGlzIGp1c3QgYSBSZXNwb25zZSBoZWxwZXIgdGhhdCBtYWtlcyBpdCBlYXNpZXIgdG8gc2VuZCBKU09OXHJcbiAgICAvLyByZXNwb25zZXMpLlxyXG4gICAgdGhyb3cganNvbih7IHdlYm1hc3RlckVtYWlsOiBcImhlbGxvQHJlbWl4LnJ1blwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBTb21ldGltZXMgeW91ciBjb2RlIGp1c3QgYmxvd3MgdXAgYW5kIHlvdSBuZXZlciBhbnRpY2lwYXRlZCBpdC4gUmVtaXggd2lsbFxyXG4gIC8vIGF1dG9tYXRpY2FsbHkgY2F0Y2ggaXQgYW5kIHNlbmQgdGhlIFVJIHRvIHRoZSBlcnJvciBib3VuZGFyeS5cclxuICBpZiAocGFyYW1zLmlkID09PSBcImthYm9vbVwiKSB7XHJcbiAgICBsb2woKTtcclxuICB9XHJcblxyXG4gIC8vIGJ1dCBvdGhlcndpc2UgdGhlIHJlY29yZCB3YXMgZm91bmQsIHVzZXIgaGFzIGFjY2Vzcywgc28gd2UgY2FuIGRvIHdoYXRldmVyXHJcbiAgLy8gZWxzZSB3ZSBuZWVkZWQgdG8gaW4gdGhlIGxvYWRlciBhbmQgcmV0dXJuIHRoZSBkYXRhLiAoVGhpcyBpcyBib3JpbmcsIHdlJ3JlXHJcbiAgLy8ganVzdCBnb25uYSByZXR1cm4gdGhlIHBhcmFtcy5pZCkuXHJcbiAgcmV0dXJuIHsgcGFyYW06IHBhcmFtcy5pZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFyYW1EZW1vKCkge1xyXG4gIGxldCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8aDE+XHJcbiAgICAgIFRoZSBwYXJhbSBpcyA8aSBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT57ZGF0YS5wYXJhbX08L2k+XHJcbiAgICA8L2gxPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNjYXRjaGJvdW5kYXJ5XHJcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCN1c2VjYXRjaFxyXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvZ3VpZGVzL25vdC1mb3VuZFxyXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcclxuICBsZXQgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcclxuXHJcbiAgbGV0IG1lc3NhZ2U6IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBzd2l0Y2ggKGNhdWdodC5zdGF0dXMpIHtcclxuICAgIGNhc2UgNDAxOlxyXG4gICAgICBtZXNzYWdlID0gKFxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgeW91IGRvIG5vdCBoYXZlIGFjY2VzcyB0by5cclxuICAgICAgICAgIE1heWJlIGFzayB0aGUgd2VibWFzdGVyICh7Y2F1Z2h0LmRhdGEud2VibWFzdGVyRW1haWx9KSBmb3IgYWNjZXNzLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKTtcclxuICAgIGNhc2UgNDA0OlxyXG4gICAgICBtZXNzYWdlID0gKFxyXG4gICAgICAgIDxwPkxvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IGRvZXMgbm90IGV4aXN0LjwvcD5cclxuICAgICAgKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIG1lc3NhZ2UgPSAoXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggeW91ciByZXF1ZXN0IVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c30ge2NhdWdodC5zdGF0dXNUZXh0fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDI+T29wcyE8L2gyPlxyXG4gICAgICA8cD57bWVzc2FnZX08L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIChJc24ndCBpdCBjb29sIHRoYXQgdGhlIHVzZXIgZ2V0cyB0byBzdGF5IGluIGNvbnRleHQgYW5kIHRyeSBhIGRpZmZlcmVudFxyXG4gICAgICAgIGxpbmsgaW4gdGhlIHBhcnRzIG9mIHRoZSBVSSB0aGF0IGRpZG4ndCBibG93IHVwPylcclxuICAgICAgPC9wPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2Vycm9yYm91bmRhcnlcclxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2d1aWRlcy9ub3QtZm91bmRcclxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XHJcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMj5FcnJvciE8L2gyPlxyXG4gICAgICA8cD57ZXJyb3IubWVzc2FnZX08L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIChJc24ndCBpdCBjb29sIHRoYXQgdGhlIHVzZXIgZ2V0cyB0byBzdGF5IGluIGNvbnRleHQgYW5kIHRyeSBhIGRpZmZlcmVudFxyXG4gICAgICAgIGxpbmsgaW4gdGhlIHBhcnRzIG9mIHRoZSBVSSB0aGF0IGRpZG4ndCBibG93IHVwPylcclxuICAgICAgPC9wPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGxldCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhIH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGU6IGRhdGEgPyBgUGFyYW06ICR7ZGF0YS5wYXJhbX1gIDogXCJPb3BzLi4uXCIsXHJcbiAgfTtcclxufTtcclxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvZGVtb3MvYWJvdXQuY3NzXCI7XHJcblxyXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGU6IFwiQWJvdXQgUmVtaXhcIixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzVXJsIH1dO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9faW50cm9cIj5cclxuICAgICAgICA8aDI+QWJvdXQgVXM8L2gyPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgT2ssIHNvIHRoaXMgcGFnZSBpc24ndCByZWFsbHkgPGVtPmFib3V0IHVzPC9lbT4sIGJ1dCB3ZSBkaWQgd2FudCB0b1xyXG4gICAgICAgICAgc2hvdyB5b3UgYSBmZXcgbW9yZSB0aGluZ3MgUmVtaXggY2FuIGRvLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIERpZCB5b3Ugbm90aWNlIHRoYXQgdGhpbmdzIGxvb2sgYSBsaXR0bGUgZGlmZmVyZW50IG9uIHRoaXMgcGFnZT8gVGhlXHJcbiAgICAgICAgICBDU1MgdGhhdCB3ZSBpbXBvcnQgaW4gdGhlIHJvdXRlIGZpbGUgYW5kIGluY2x1ZGUgaW4gaXRze1wiIFwifVxyXG4gICAgICAgICAgPGNvZGU+bGlua3M8L2NvZGU+IGV4cG9ydCBpcyBvbmx5IGluY2x1ZGVkIG9uIHRoaXMgcm91dGUgYW5kIGl0c1xyXG4gICAgICAgICAgY2hpbGRyZW4uXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgV2FpdCBhIHNlYy4uLjxlbT5pdHMgY2hpbGRyZW48L2VtPj8gVG8gdW5kZXJzdGFuZCB3aGF0IHdlIG1lYW4gYnlcclxuICAgICAgICAgIHRoaXMse1wiIFwifVxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVtaXgucnVuL3R1dG9yaWFsLzQtbmVzdGVkLXJvdXRlcy1wYXJhbXNcIj5cclxuICAgICAgICAgICAgcmVhZCBhbGwgYWJvdXQgbmVzdGVkIHJvdXRlcyBpbiB0aGUgZG9jc1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRJbmRleCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgWW91IGFyZSBsb29raW5nIGF0IHRoZSBpbmRleCByb3V0ZSBmb3IgdGhlIDxjb2RlPi9hYm91dDwvY29kZT4gVVJMXHJcbiAgICAgICAgc2VnbWVudCwgYnV0IHRoZXJlIGFyZSBuZXN0ZWQgcm91dGVzIGFzIHdlbGwhXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgIDxMaW5rIHRvPVwid2hvYVwiPkNoZWNrIG91dCBvbmUgb2YgdGhlbSBoZXJlLjwvTGluaz5cclxuICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXRJbmRleCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgV2hvYSwgdGhpcyBpcyBhIG5lc3RlZCByb3V0ZSEgV2UgcmVuZGVyIHRoZSA8Y29kZT4vYWJvdXQ8L2NvZGU+IGxheW91dFxyXG4gICAgICAgIHJvdXRlIGNvbXBvbmVudCwgYW5kIGl0cyA8Y29kZT5PdXRsZXQ8L2NvZGU+IHJlbmRlcnMgb3VyIHJvdXRlXHJcbiAgICAgICAgY29tcG9uZW50LiBcdUQ4M0VcdUREMkZcclxuICAgICAgPC9wPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgPExpbmsgdG89XCIuLlwiPlxyXG4gICAgICAgICAgICBHbyBiYWNrIHRvIHRoZSA8Y29kZT4vYWJvdXQ8L2NvZGU+IGluZGV4LlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwganNvbiwgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBDb3VudGVyQnV0dG9uIH0gZnJvbSBcInVpXCI7XHJcblxyXG50eXBlIEluZGV4RGF0YSA9IHtcclxuICByZXNvdXJjZXM6IEFycmF5PHsgbmFtZTogc3RyaW5nOyB1cmw6IHN0cmluZyB9PjtcclxuICBkZW1vczogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IHRvOiBzdHJpbmcgfT47XHJcbn07XHJcblxyXG4vLyBMb2FkZXJzIHByb3ZpZGUgZGF0YSB0byBjb21wb25lbnRzIGFuZCBhcmUgb25seSBldmVyIGNhbGxlZCBvbiB0aGUgc2VydmVyLCBzb1xyXG4vLyB5b3UgY2FuIGNvbm5lY3QgdG8gYSBkYXRhYmFzZSBvciBydW4gYW55IHNlcnZlciBzaWRlIGNvZGUgeW91IHdhbnQgcmlnaHQgbmV4dFxyXG4vLyB0byB0aGUgY29tcG9uZW50IHRoYXQgcmVuZGVycyBpdC5cclxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2xvYWRlclxyXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgbGV0IGRhdGE6IEluZGV4RGF0YSA9IHtcclxuICAgIHJlc291cmNlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJSZW1peCBEb2NzXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vcmVtaXgucnVuL2RvY3NcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiUmVhY3QgUm91dGVyIERvY3NcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJSZW1peCBEaXNjb3JkXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vZGlzY29yZC5nZy9WQmVQczZkXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgZGVtb3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRvOiBcImRlbW9zL2FjdGlvbnNcIixcclxuICAgICAgICBuYW1lOiBcIkFjdGlvbnNcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRvOiBcImRlbW9zL2Fib3V0XCIsXHJcbiAgICAgICAgbmFtZTogXCJOZXN0ZWQgUm91dGVzLCBDU1MgbG9hZGluZy91bmxvYWRpbmdcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRvOiBcImRlbW9zL3BhcmFtc1wiLFxyXG4gICAgICAgIG5hbWU6IFwiVVJMIFBhcmFtcyBhbmQgRXJyb3IgQm91bmRhcmllc1wiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG5cclxuICAvLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvcmVtaXgjanNvblxyXG4gIHJldHVybiBqc29uKGRhdGEpO1xyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI21ldGFcclxuZXhwb3J0IGxldCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlOiBcIlJlbWl4IFN0YXJ0ZXJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIldlbGNvbWUgdG8gcmVtaXghXCIsXHJcbiAgfTtcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2d1aWRlcy9yb3V0aW5nI2luZGV4LXJvdXRlc1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICBsZXQgZGF0YSA9IHVzZUxvYWRlckRhdGE8SW5kZXhEYXRhPigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZW1peF9fcGFnZVwiPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8aDI+V2VsY29tZSB0byBSZW1peCE8L2gyPlxyXG4gICAgICAgIDxwPldlJ3JlIHN0b2tlZCB0aGF0IHlvdSdyZSBoZXJlLiBcdUQ4M0VcdURENzM8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBGZWVsIGZyZWUgdG8gdGFrZSBhIGxvb2sgYXJvdW5kIHRoZSBjb2RlIHRvIHNlZSBob3cgUmVtaXggZG9lcyB0aGluZ3MsXHJcbiAgICAgICAgICBpdCBtaWdodCBiZSBhIGJpdCBkaWZmZXJlbnQgdGhhbiB3aGF0IHlvdVx1MjAxOXJlIHVzZWQgdG8uIFdoZW4geW91J3JlXHJcbiAgICAgICAgICByZWFkeSB0byBkaXZlIGRlZXBlciwgd2UndmUgZ290IHBsZW50eSBvZiByZXNvdXJjZXMgdG8gZ2V0IHlvdVxyXG4gICAgICAgICAgdXAtYW5kLXJ1bm5pbmcgcXVpY2tseS5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBDaGVjayBvdXQgYWxsIHRoZSBkZW1vcyBpbiB0aGlzIHN0YXJ0ZXIsIGFuZCB0aGVuIGp1c3QgZGVsZXRlIHRoZXtcIiBcIn1cclxuICAgICAgICAgIDxjb2RlPmFwcC9yb3V0ZXMvZGVtb3M8L2NvZGU+IGFuZCA8Y29kZT5hcHAvc3R5bGVzL2RlbW9zPC9jb2RlPntcIiBcIn1cclxuICAgICAgICAgIGZvbGRlcnMgd2hlbiB5b3UncmUgcmVhZHkgdG8gdHVybiB0aGlzIGludG8geW91ciBuZXh0IHByb2plY3QuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxhc2lkZT5cclxuICAgICAgICA8aDI+RGVtb3MgSW4gVGhpcyBBcHA8L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIHtkYXRhLmRlbW9zLm1hcCgoZGVtbykgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtkZW1vLnRvfSBjbGFzc05hbWU9XCJyZW1peF9fcGFnZV9fcmVzb3VyY2VcIj5cclxuICAgICAgICAgICAgICA8TGluayB0bz17ZGVtby50b30gcHJlZmV0Y2g9XCJpbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIHtkZW1vLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8aDI+UmVzb3VyY2VzPC9oMj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7ZGF0YS5yZXNvdXJjZXMubWFwKChyZXNvdXJjZSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtyZXNvdXJjZS51cmx9IGNsYXNzTmFtZT1cInJlbWl4X19wYWdlX19yZXNvdXJjZVwiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3Jlc291cmNlLnVybH0+e3Jlc291cmNlLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9hc2lkZT5cclxuICAgICAgPENvdW50ZXJCdXR0b24gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsVUFBVTtBQUFBLE1BQ3ZDLFlBQVk7QUFBQSxNQUNaLEtBQUss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
