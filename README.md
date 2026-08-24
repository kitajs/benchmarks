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
* __Node:__ `v20.20.2`
* __Run:__ Mon Aug 24 2026 01:20:24 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 68631.6    | 14.06        | 12.24         |
| polka                    | 0.5.2    | ✓      | 67648.4    | 14.28        | 12.06         |
| connect                  | 3.7.0    | ✗      | 66971.6    | 14.43        | 11.94         |
| kita                     | 1.1.36   | ✓      | 66653.6    | 14.50        | 11.95         |
| fastify                  | 4.29.1   | ✓      | 66130.4    | 14.63        | 11.86         |
| server-base-router       | 7.1.32   | ✓      | 64836.0    | 14.93        | 11.56         |
| server-base              | 7.1.32   | ✗      | 64739.2    | 14.95        | 11.55         |
| rayo                     | 1.4.6    | ✓      | 64612.4    | 14.99        | 11.52         |
| connect-router           | 1.3.8    | ✓      | 61513.6    | 15.75        | 10.97         |
| polkadot                 | 1.0.0    | ✗      | 58468.0    | 16.61        | 10.43         |
| 0http                    | 3.5.3    | ✓      | 57151.2    | 17.01        | 10.19         |
| hono                     | 4.13.3   | ✓      | 56834.4    | 17.09        | 9.32          |
| koa                      | 2.16.4   | ✗      | 52540.0    | 18.53        | 9.37          |
| h3                       | 1.15.11  | ✗      | 52486.4    | 18.56        | 9.36          |
| h3-router                | 1.15.11  | ✓      | 51669.6    | 18.86        | 9.21          |
| restana                  | 4.9.9    | ✓      | 51495.2    | 18.92        | 9.18          |
| take-five                | 2.0.0    | ✓      | 49865.6    | 19.56        | 17.93         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 49385.6    | 19.74        | 8.81          |
| restify                  | 11.1.0   | ✓      | 48412.0    | 20.16        | 8.73          |
| koa-router               | 12.0.1   | ✓      | 46992.8    | 20.78        | 8.38          |
| hapi                     | 21.4.10  | ✓      | 42530.4    | 23.01        | 7.58          |
| express                  | 4.22.2   | ✓      | 13585.6    | 73.06        | 2.42          |
| express-with-middlewares | 4.22.2   | ✓      | 12997.6    | 76.39        | 4.83          |
| fastify-big-json         | 4.29.1   | ✓      | 12663.4    | 78.42        | 145.69        |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
