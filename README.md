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
* __Node:__ `v20.18.1`
* __Run:__ Mon Jan 13 2025 01:31:04 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 48312.8    | 20.24        | 8.62          |
| polkadot                 | 1.0.0    | ✗      | 47197.6    | 20.69        | 8.42          |
| kita                     | 1.1.36   | ✓      | 47054.4    | 20.72        | 8.44          |
| polka                    | 0.5.2    | ✓      | 46964.0    | 20.79        | 8.38          |
| connect                  | 3.7.0    | ✗      | 46563.2    | 20.96        | 8.30          |
| fastify                  | 4.29.0   | ✓      | 46233.6    | 21.13        | 8.29          |
| rayo                     | 1.4.6    | ✓      | 45904.8    | 21.26        | 8.19          |
| server-base              | 7.1.32   | ✗      | 45847.2    | 21.28        | 8.18          |
| server-base-router       | 7.1.32   | ✓      | 45360.0    | 21.53        | 8.09          |
| 0http                    | 3.5.3    | ✓      | 45042.4    | 21.70        | 8.03          |
| connect-router           | 1.3.8    | ✓      | 43002.4    | 22.75        | 7.67          |
| h3                       | 1.13.1   | ✗      | 41153.6    | 23.80        | 7.34          |
| restana                  | 4.9.9    | ✓      | 40720.8    | 24.06        | 7.26          |
| hono                     | 4.6.16   | ✓      | 40432.8    | 24.24        | 6.63          |
| h3-router                | 1.13.1   | ✓      | 40129.6    | 24.41        | 7.16          |
| koa                      | 2.15.3   | ✗      | 37514.4    | 26.18        | 6.69          |
| take-five                | 2.0.0    | ✓      | 35959.8    | 27.29        | 12.93         |
| restify                  | 11.1.0   | ✓      | 35683.4    | 27.52        | 6.43          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35324.2    | 27.82        | 6.30          |
| koa-router               | 12.0.1   | ✓      | 34570.2    | 28.41        | 6.17          |
| hapi                     | 21.3.12  | ✓      | 32207.4    | 30.55        | 5.74          |
| fastify-big-json         | 4.29.0   | ✓      | 11746.0    | 84.57        | 135.15        |
| express                  | 4.21.2   | ✓      | 11507.4    | 86.33        | 2.05          |
| express-with-middlewares | 4.21.2   | ✓      | 10615.2    | 93.59        | 3.95          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
