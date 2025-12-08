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
* __Run:__ Mon Dec 08 2025 01:37:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.6 | ✗      | 48197.6    | 20.27        | 8.60          |
| fastify                  | 4.29.1   | ✓      | 47279.2    | 20.64        | 8.48          |
| kita                     | 1.1.36   | ✓      | 46806.4    | 20.85        | 8.39          |
| polka                    | 0.5.2    | ✓      | 46382.4    | 21.03        | 8.27          |
| server-base-router       | 7.1.32   | ✓      | 46363.2    | 21.05        | 8.27          |
| polkadot                 | 1.0.0    | ✗      | 46348.0    | 21.08        | 8.27          |
| rayo                     | 1.4.6    | ✓      | 46296.8    | 21.09        | 8.26          |
| server-base              | 7.1.32   | ✗      | 45809.6    | 21.33        | 8.17          |
| connect                  | 3.7.0    | ✗      | 45719.8    | 21.36        | 8.15          |
| 0http                    | 3.5.3    | ✓      | 45395.2    | 21.53        | 8.10          |
| connect-router           | 1.3.8    | ✓      | 43660.8    | 22.39        | 7.79          |
| h3                       | 1.15.4   | ✗      | 42615.2    | 22.96        | 7.60          |
| h3-router                | 1.15.4   | ✓      | 42469.6    | 23.05        | 7.57          |
| restana                  | 4.9.9    | ✓      | 38731.0    | 25.31        | 6.91          |
| koa                      | 2.16.3   | ✗      | 37537.6    | 26.14        | 6.69          |
| hono                     | 4.10.7   | ✓      | 36997.0    | 26.52        | 6.07          |
| take-five                | 2.0.0    | ✓      | 35945.8    | 27.30        | 12.92         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35296.2    | 27.83        | 6.29          |
| restify                  | 11.1.0   | ✓      | 34925.0    | 28.13        | 6.29          |
| koa-router               | 12.0.1   | ✓      | 33733.0    | 29.15        | 6.02          |
| hapi                     | 21.4.4   | ✓      | 31689.6    | 31.06        | 5.65          |
| fastify-big-json         | 4.29.1   | ✓      | 11823.0    | 84.04        | 136.01        |
| express                  | 4.22.1   | ✓      | 11328.8    | 87.69        | 2.02          |
| express-with-middlewares | 4.22.1   | ✓      | 10439.8    | 95.18        | 3.88          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
