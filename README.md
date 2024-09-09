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
* __Run:__ Mon Sep 09 2024 01:25:36 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.17.0 | ✗      | 47323.2    | 20.62        | 8.44          |
| connect                  | 3.7.0    | ✗      | 46435.2    | 21.02        | 8.28          |
| polka                    | 0.5.2    | ✓      | 46211.2    | 21.13        | 8.24          |
| fastify                  | 4.28.1   | ✓      | 46194.4    | 21.15        | 8.28          |
| rayo                     | 1.4.6    | ✓      | 45848.8    | 21.30        | 8.18          |
| 0http                    | 3.5.3    | ✓      | 45356.8    | 21.56        | 8.09          |
| server-base-router       | 7.1.32   | ✓      | 45256.8    | 21.59        | 8.07          |
| server-base              | 7.1.32   | ✗      | 44988.8    | 21.73        | 8.02          |
| kita                     | 1.1.36   | ✓      | 44792.0    | 21.83        | 8.03          |
| polkadot                 | 1.0.0    | ✗      | 43352.8    | 22.58        | 7.73          |
| connect-router           | 1.3.8    | ✓      | 42440.0    | 23.07        | 7.57          |
| h3                       | 1.12.0   | ✗      | 40028.0    | 24.48        | 7.14          |
| h3-router                | 1.12.0   | ✓      | 39948.8    | 24.53        | 7.12          |
| hono                     | 4.5.11   | ✓      | 39872.0    | 24.57        | 7.11          |
| restana                  | 4.9.9    | ✓      | 38949.8    | 25.17        | 6.95          |
| koa                      | 2.15.3   | ✗      | 36601.0    | 26.82        | 6.53          |
| take-five                | 2.0.0    | ✓      | 35317.4    | 27.81        | 12.70         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34445.0    | 28.52        | 6.14          |
| koa-router               | 12.0.1   | ✓      | 33662.6    | 29.22        | 6.00          |
| restify                  | 11.1.0   | ✓      | 33407.6    | 29.43        | 6.02          |
| hapi                     | 21.3.10  | ✓      | 31470.8    | 31.27        | 5.61          |
| fastify-big-json         | 4.28.1   | ✓      | 11781.4    | 84.30        | 135.56        |
| express                  | 4.19.2   | ✓      | 10616.2    | 93.61        | 1.89          |
| express-with-middlewares | 4.19.2   | ✓      | 9844.8     | 100.98       | 3.66          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
