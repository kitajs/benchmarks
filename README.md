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
* __Node:__ `v20.19.1`
* __Run:__ Mon May 26 2025 01:36:47 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.1 | ✗      | 47713.6    | 20.45        | 8.51          |
| connect                  | 3.7.0    | ✗      | 46821.6    | 20.85        | 8.35          |
| fastify                  | 4.29.1   | ✓      | 46673.6    | 20.93        | 8.37          |
| polka                    | 0.5.2    | ✓      | 46340.8    | 21.07        | 8.26          |
| rayo                     | 1.4.6    | ✓      | 45832.0    | 21.28        | 8.17          |
| kita                     | 1.1.36   | ✓      | 45746.4    | 21.33        | 8.20          |
| 0http                    | 3.5.3    | ✓      | 45244.0    | 21.60        | 8.07          |
| server-base-router       | 7.1.32   | ✓      | 45236.0    | 21.59        | 8.07          |
| polkadot                 | 1.0.0    | ✗      | 45160.8    | 21.65        | 8.05          |
| server-base              | 7.1.32   | ✗      | 45035.2    | 21.70        | 8.03          |
| connect-router           | 1.3.8    | ✓      | 43086.4    | 22.69        | 7.68          |
| h3                       | 1.15.3   | ✗      | 42820.8    | 22.85        | 7.64          |
| h3-router                | 1.15.3   | ✓      | 42436.8    | 23.07        | 7.57          |
| hono                     | 4.7.10   | ✓      | 40003.2    | 24.52        | 6.56          |
| restana                  | 4.9.9    | ✓      | 39931.8    | 24.55        | 7.12          |
| koa                      | 2.16.1   | ✗      | 36404.8    | 26.95        | 6.49          |
| take-five                | 2.0.0    | ✓      | 35625.8    | 27.55        | 12.81         |
| restify                  | 11.1.0   | ✓      | 34948.2    | 28.10        | 6.30          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34574.0    | 28.40        | 6.17          |
| koa-router               | 12.0.1   | ✓      | 33573.2    | 29.26        | 5.99          |
| hapi                     | 21.4.0   | ✓      | 31644.6    | 31.10        | 5.64          |
| fastify-big-json         | 4.29.1   | ✓      | 11732.6    | 84.67        | 135.00        |
| express                  | 4.21.2   | ✓      | 11217.2    | 88.58        | 2.00          |
| express-with-middlewares | 4.21.2   | ✓      | 10192.5    | 97.50        | 3.79          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
