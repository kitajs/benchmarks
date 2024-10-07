<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.17.0`
* __Run:__ Mon Oct 07 2024 01:28:53 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.17.0 | ✗      | 47073.6    | 20.73        | 8.39          |
| kita                     | 1.1.36   | ✓      | 46312.0    | 21.07        | 8.30          |
| polka                    | 0.5.2    | ✓      | 46296.0    | 21.09        | 8.26          |
| fastify                  | 4.28.1   | ✓      | 46147.2    | 21.15        | 8.27          |
| connect                  | 3.7.0    | ✗      | 45954.4    | 21.24        | 8.20          |
| rayo                     | 1.4.6    | ✓      | 45646.4    | 21.40        | 8.14          |
| polkadot                 | 1.0.0    | ✗      | 45456.0    | 21.50        | 8.11          |
| 0http                    | 3.5.3    | ✓      | 45128.8    | 21.66        | 8.05          |
| server-base              | 7.1.32   | ✗      | 45103.2    | 21.70        | 8.04          |
| server-base-router       | 7.1.32   | ✓      | 44748.8    | 21.86        | 7.98          |
| connect-router           | 1.3.8    | ✓      | 43378.4    | 22.55        | 7.74          |
| h3-router                | 1.13.0   | ✓      | 43037.6    | 22.74        | 7.67          |
| h3                       | 1.13.0   | ✗      | 41835.2    | 23.40        | 7.46          |
| restana                  | 4.9.9    | ✓      | 40581.6    | 24.14        | 7.24          |
| hono                     | 4.6.3    | ✓      | 39665.6    | 24.70        | 7.07          |
| koa                      | 2.15.3   | ✗      | 36103.4    | 27.19        | 6.44          |
| take-five                | 2.0.0    | ✓      | 34721.4    | 28.29        | 12.48         |
| restify                  | 11.1.0   | ✓      | 34459.4    | 28.50        | 6.21          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34115.0    | 28.81        | 6.08          |
| koa-router               | 12.0.1   | ✓      | 33078.0    | 29.72        | 5.90          |
| hapi                     | 21.3.10  | ✓      | 31164.4    | 31.57        | 5.56          |
| fastify-big-json         | 4.28.1   | ✓      | 11862.2    | 83.73        | 136.49        |
| express                  | 4.21.0   | ✓      | 10881.6    | 91.31        | 1.94          |
| express-with-middlewares | 4.21.0   | ✓      | 10304.5    | 96.45        | 3.83          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
