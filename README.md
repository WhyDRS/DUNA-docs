<div align="center">
<a href="https://www.whydrs.org"><img alt="WhyDRS | Direct Register Your Shares to Protect Your Investment" src="/imgs/brand/logo-tmp.jpg" width="558" /></a>
<br/></div>

WhyDRS is a free educational resource about the financial markets in the United States – specifically direct registration, a method of personal ownership available to everyone but rarely used. Keeping long investments in your own name - [with the SEC approved Direct Registration System](https://www.sec.gov/resources-for-investors/investor-alerts-bulletins/investorpubsholdsechtm) - provides multiple benefits and safeties not available through other means.



### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
