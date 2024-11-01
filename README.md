<div align="center">
<a href="https://www.whydrs.org"><img alt="WhyDRS | Direct Register Your Shares to Protect Your Investment" src="static/imgs/brand/jpg/url-rounded.jpg" width="558" /></a>
<br/></div>

WhyDRS is a free educational resource about the financial markets in the United States – specifically direct registration, a method of personal ownership available to everyone but rarely used. Keeping long investments in your own name - [with the SEC approved Direct Registration System](https://www.sec.gov/resources-for-investors/investor-alerts-bulletins/investorpubsholdsechtm) - provides multiple benefits and safeties not available through other means.



## Quick Start
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.dev/WhyDRS/DAO-docs)

### Prerequisites

To begin development on the documentation, you will first need to install the following:

- Node.js (v19, not higher): see https://nodejs.org/en/download/package-manager for details for your system
- npm: e.g. `sudo apt install npm` on Ubuntu
- yarn: `npm install yarn`

### Development

Once all the prerequisites have been installed, you can run the following commands:

```bash
git clone https://github.com/whydrs/dao-docs
cd dao-docs
npm run start
```

This will begin the development server, and open a browser window/tab pointing
to `http://localhost:3000/docs/`. This development server will auto-reload when
it detects changes to the repository.

## Repository Structure

- `/docs/` Contains all the documentation content.
- `/comments/` Contains crowdsourced regulatory comments.
- `/peitions/` Contains crowdsourced regulatory petitions.
- `/blog/` Contains community contributor posts.
- `/src/` Contains non-documentation code files.
- `/static/` Contains static assets like images.[^static]

[^static]: Anything in this directory will be copied to the root of the final `build` directory.

## Using Markdown

### Markdown Basics

If you're unfamiliar with Markdown, there are **loads** of good tutorials and cheat sheets out there. Check out some of these resources to get a handle on the basics:

- [CommonMark cheat sheet and tutorial][commonmark]
- [Interactive markdown tutorial][tutorial]
- [The markdown guide][guide]

[commonmark]: https://commonmark.org/help/
[tutorial]: https://www.markdowntutorial.com/
[guide]: https://www.markdownguide.org/
