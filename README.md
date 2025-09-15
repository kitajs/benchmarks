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
* __Node:__ `v20.19.5`
* __Run:__ Mon Sep 15 2025 01:35:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.5 | ✗      | 47612.0    | 20.51        | 8.49          |
| rayo                     | 1.4.6    | ✓      | 46017.6    | 21.23        | 8.21          |
| kita                     | 1.1.36   | ✓      | 45927.2    | 21.27        | 8.23          |
| fastify                  | 4.29.1   | ✓      | 45620.8    | 21.42        | 8.18          |
| connect                  | 3.7.0    | ✗      | 45421.8    | 21.52        | 8.10          |
| polka                    | 0.5.2    | ✓      | 45236.8    | 21.61        | 8.07          |
| server-base-router       | 7.1.32   | ✓      | 45225.6    | 21.62        | 8.06          |
| 0http                    | 3.5.3    | ✓      | 44728.0    | 21.86        | 7.98          |
| server-base              | 7.1.32   | ✗      | 44352.8    | 22.05        | 7.91          |
| polkadot                 | 1.0.0    | ✗      | 43464.0    | 22.51        | 7.75          |
| connect-router           | 1.3.8    | ✓      | 42656.0    | 22.94        | 7.61          |
| h3-router                | 1.15.4   | ✓      | 41027.2    | 23.88        | 7.32          |
| h3                       | 1.15.4   | ✗      | 40928.8    | 23.94        | 7.30          |
| restana                  | 4.9.9    | ✓      | 37963.2    | 25.84        | 6.77          |
| koa                      | 2.16.2   | ✗      | 36549.0    | 26.86        | 6.52          |
| hono                     | 4.9.7    | ✓      | 36337.4    | 27.03        | 5.96          |
| restify                  | 11.1.0   | ✓      | 34893.8    | 28.16        | 6.29          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34182.6    | 28.75        | 6.10          |
| take-five                | 2.0.0    | ✓      | 34110.2    | 28.82        | 12.26         |
| koa-router               | 12.0.1   | ✓      | 32547.0    | 30.22        | 5.80          |
| hapi                     | 21.4.3   | ✓      | 31290.0    | 31.45        | 5.58          |
| fastify-big-json         | 4.29.1   | ✓      | 11922.2    | 83.31        | 137.18        |
| express                  | 4.21.2   | ✓      | 10970.8    | 90.57        | 1.96          |
| express-with-middlewares | 4.21.2   | ✓      | 10097.8    | 98.44        | 3.76          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
