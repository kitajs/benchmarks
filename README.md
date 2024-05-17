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
* __Node:__ `v20.13.1`
* __Run:__ Fri May 17 2024 04:23:22 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.13.1 | ✗      | 46429.6    | 21.04        | 8.28          |
| connect                  | 3.7.0    | ✗      | 45675.2    | 21.40        | 8.15          |
| fastify                  | 4.27.0   | ✓      | 45645.6    | 21.39        | 8.18          |
| polka                    | 0.5.2    | ✓      | 45267.2    | 21.59        | 8.07          |
| kita                     | 1.1.36   | ✓      | 45070.4    | 21.69        | 8.08          |
| polkadot                 | 1.0.0    | ✗      | 44272.8    | 22.09        | 7.90          |
| rayo                     | 1.4.6    | ✓      | 43951.2    | 22.25        | 7.84          |
| server-base              | 7.1.32   | ✗      | 43707.2    | 22.37        | 7.79          |
| server-base-router       | 7.1.32   | ✓      | 43666.4    | 22.40        | 7.79          |
| 0http                    | 3.5.3    | ✓      | 43633.6    | 22.42        | 7.78          |
| connect-router           | 1.3.8    | ✓      | 42496.0    | 23.04        | 7.58          |
| h3                       | 1.11.1   | ✗      | 40868.0    | 23.97        | 7.29          |
| h3-router                | 1.11.1   | ✓      | 40656.8    | 24.10        | 7.25          |
| restana                  | 4.9.9    | ✓      | 38951.2    | 25.18        | 6.95          |
| hono                     | 4.3.7    | ✓      | 38913.6    | 25.20        | 6.94          |
| koa                      | 2.15.3   | ✗      | 35845.0    | 27.39        | 6.39          |
| take-five                | 2.0.0    | ✓      | 34785.8    | 28.24        | 12.51         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33855.2    | 29.04        | 6.04          |
| restify                  | 11.1.0   | ✓      | 33661.2    | 29.20        | 6.07          |
| koa-router               | 12.0.1   | ✓      | 33312.0    | 29.51        | 5.94          |
| hapi                     | 21.3.9   | ✓      | 30892.8    | 31.87        | 5.51          |
| fastify-big-json         | 4.27.0   | ✓      | 11894.4    | 83.52        | 136.85        |
| express                  | 4.19.2   | ✓      | 10889.4    | 91.27        | 1.94          |
| express-with-middlewares | 4.19.2   | ✓      | 10166.4    | 97.78        | 3.78          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
