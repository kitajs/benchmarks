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
* __Node:__ `v20.19.6`
* __Run:__ Mon Dec 29 2025 01:44:11 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 47094.4    | 20.73        | 8.40          |
| bare                     | v20.19.6 | ✗      | 47090.4    | 20.72        | 8.40          |
| kita                     | 1.1.36   | ✓      | 46085.6    | 21.20        | 8.26          |
| server-base-router       | 7.1.32   | ✓      | 45956.0    | 21.25        | 8.20          |
| rayo                     | 1.4.6    | ✓      | 45954.4    | 21.25        | 8.20          |
| connect                  | 3.7.0    | ✗      | 45786.2    | 21.33        | 8.16          |
| fastify                  | 4.29.1   | ✓      | 45302.4    | 21.58        | 8.12          |
| server-base              | 7.1.32   | ✗      | 45241.6    | 21.60        | 8.07          |
| polkadot                 | 1.0.0    | ✗      | 44031.2    | 22.21        | 7.85          |
| 0http                    | 3.5.3    | ✓      | 43323.2    | 22.59        | 7.73          |
| connect-router           | 1.3.8    | ✓      | 42460.8    | 23.05        | 7.57          |
| h3                       | 1.15.4   | ✗      | 41021.6    | 23.89        | 7.32          |
| h3-router                | 1.15.4   | ✓      | 40920.8    | 23.94        | 7.30          |
| restana                  | 4.9.9    | ✓      | 38412.0    | 25.53        | 6.85          |
| hono                     | 4.11.3   | ✓      | 36974.6    | 26.53        | 6.07          |
| koa                      | 2.16.3   | ✗      | 36715.0    | 26.73        | 6.55          |
| take-five                | 2.0.0    | ✓      | 35322.6    | 27.80        | 12.70         |
| restify                  | 11.1.0   | ✓      | 35144.4    | 27.95        | 6.33          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34999.0    | 28.07        | 6.24          |
| koa-router               | 12.0.1   | ✓      | 33502.4    | 29.35        | 5.97          |
| hapi                     | 21.4.4   | ✓      | 31269.2    | 31.47        | 5.58          |
| fastify-big-json         | 4.29.1   | ✓      | 11746.6    | 84.57        | 135.14        |
| express                  | 4.22.1   | ✓      | 10903.2    | 91.14        | 1.94          |
| express-with-middlewares | 4.22.1   | ✓      | 10300.2    | 96.49        | 3.83          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.3  | ✓      | N/A        | N/A          | N/A           |
