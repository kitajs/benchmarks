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
* __Node:__ `v20.19.4`
* __Run:__ Mon Aug 18 2025 01:41:34 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 46588.0    | 20.97        | 8.31          |
| bare                     | v20.19.4 | ✗      | 45180.0    | 21.64        | 8.06          |
| polkadot                 | 1.0.0    | ✗      | 45166.4    | 21.65        | 8.05          |
| 0http                    | 3.5.3    | ✓      | 44836.8    | 21.81        | 8.00          |
| kita                     | 1.1.36   | ✓      | 44511.2    | 21.97        | 7.98          |
| rayo                     | 1.4.6    | ✓      | 44501.6    | 21.97        | 7.94          |
| fastify                  | 4.29.1   | ✓      | 44432.0    | 22.01        | 7.97          |
| server-base              | 7.1.32   | ✗      | 44316.0    | 22.06        | 7.90          |
| server-base-router       | 7.1.32   | ✓      | 44228.0    | 22.11        | 7.89          |
| connect                  | 3.7.0    | ✗      | 42922.6    | 22.79        | 7.65          |
| h3-router                | 1.15.4   | ✓      | 42422.4    | 23.07        | 7.57          |
| h3                       | 1.15.4   | ✗      | 41655.2    | 23.51        | 7.43          |
| connect-router           | 1.3.8    | ✓      | 41638.4    | 23.52        | 7.43          |
| restana                  | 4.9.9    | ✓      | 38409.0    | 25.53        | 6.85          |
| hono                     | 4.9.2    | ✓      | 36580.8    | 26.84        | 6.00          |
| koa                      | 2.16.2   | ✗      | 35699.0    | 27.51        | 6.37          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34667.8    | 28.34        | 6.18          |
| take-five                | 2.0.0    | ✓      | 34128.6    | 28.80        | 12.27         |
| restify                  | 11.1.0   | ✓      | 33766.2    | 29.11        | 6.09          |
| koa-router               | 12.0.1   | ✓      | 32669.6    | 30.10        | 5.83          |
| hapi                     | 21.4.3   | ✓      | 31930.6    | 30.81        | 5.69          |
| fastify-big-json         | 4.29.1   | ✓      | 11779.2    | 84.34        | 135.52        |
| express                  | 4.21.2   | ✓      | 10948.6    | 90.75        | 1.95          |
| express-with-middlewares | 4.21.2   | ✓      | 10341.6    | 96.07        | 3.85          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
