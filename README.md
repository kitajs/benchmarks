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
* __Node:__ `v20.20.0`
* __Run:__ Mon Feb 16 2026 01:55:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.0 | ✗      | 47223.2    | 20.68        | 8.42          |
| polka                    | 0.5.2    | ✓      | 46915.2    | 20.81        | 8.37          |
| kita                     | 1.1.36   | ✓      | 46544.0    | 20.98        | 8.34          |
| connect                  | 3.7.0    | ✗      | 45868.8    | 21.30        | 8.18          |
| fastify                  | 4.29.1   | ✓      | 45809.6    | 21.34        | 8.21          |
| server-base-router       | 7.1.32   | ✓      | 44624.8    | 21.91        | 7.96          |
| server-base              | 7.1.32   | ✗      | 44616.0    | 21.91        | 7.96          |
| 0http                    | 3.5.3    | ✓      | 43922.4    | 22.28        | 7.83          |
| rayo                     | 1.4.6    | ✓      | 43799.2    | 22.33        | 7.81          |
| connect-router           | 1.3.8    | ✓      | 43073.6    | 22.72        | 7.68          |
| polkadot                 | 1.0.0    | ✗      | 42566.4    | 23.00        | 7.59          |
| h3                       | 1.15.5   | ✗      | 40740.8    | 24.05        | 7.27          |
| h3-router                | 1.15.5   | ✓      | 39489.6    | 24.83        | 7.04          |
| restana                  | 4.9.9    | ✓      | 37794.4    | 25.96        | 6.74          |
| hono                     | 4.11.9   | ✓      | 36272.2    | 27.06        | 5.95          |
| koa                      | 2.16.3   | ✗      | 35956.2    | 27.31        | 6.41          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34380.2    | 28.58        | 6.13          |
| restify                  | 11.1.0   | ✓      | 34247.0    | 28.69        | 6.17          |
| take-five                | 2.0.0    | ✓      | 34223.8    | 28.71        | 12.30         |
| koa-router               | 12.0.1   | ✓      | 33645.8    | 29.22        | 6.00          |
| hapi                     | 21.4.4   | ✓      | 30896.4    | 31.86        | 5.51          |
| fastify-big-json         | 4.29.1   | ✓      | 11861.4    | 83.71        | 136.48        |
| express                  | 4.22.1   | ✓      | 11205.8    | 88.65        | 2.00          |
| express-with-middlewares | 4.22.1   | ✓      | 10481.6    | 94.81        | 3.90          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
