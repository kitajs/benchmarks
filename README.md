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
* __Run:__ Mon Sep 07 2026 02:35:16 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 46674.4    | 20.92        | 8.32          |
| rayo                     | 1.4.6    | ✓      | 45984.0    | 21.24        | 8.20          |
| kita                     | 1.1.36   | ✓      | 45858.4    | 21.31        | 8.22          |
| polka                    | 0.5.2    | ✓      | 45842.4    | 21.32        | 8.18          |
| connect                  | 3.7.0    | ✗      | 45589.6    | 21.44        | 8.13          |
| fastify                  | 4.29.1   | ✓      | 45431.2    | 21.52        | 8.15          |
| server-base              | 7.1.32   | ✗      | 45100.8    | 21.69        | 8.04          |
| server-base-router       | 7.1.32   | ✓      | 44849.6    | 21.81        | 8.00          |
| polkadot                 | 1.0.0    | ✗      | 43805.6    | 22.33        | 7.81          |
| 0http                    | 3.5.3    | ✓      | 42152.0    | 23.22        | 7.52          |
| connect-router           | 1.3.8    | ✓      | 42124.8    | 23.24        | 7.51          |
| h3                       | 1.15.11  | ✗      | 38617.6    | 25.39        | 6.89          |
| h3-router                | 1.15.11  | ✓      | 38428.8    | 25.53        | 6.85          |
| hono                     | 4.13.7   | ✓      | 38227.2    | 25.65        | 6.27          |
| restana                  | 4.9.9    | ✓      | 36932.2    | 26.59        | 6.59          |
| koa                      | 2.16.4   | ✗      | 35957.4    | 27.31        | 6.41          |
| take-five                | 2.0.0    | ✓      | 34760.2    | 28.27        | 12.50         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34407.4    | 28.55        | 6.14          |
| restify                  | 11.1.0   | ✓      | 33721.0    | 29.16        | 6.08          |
| hapi                     | 21.4.10  | ✓      | 32208.2    | 30.54        | 5.74          |
| koa-router               | 12.0.1   | ✓      | 32009.4    | 30.73        | 5.71          |
| fastify-big-json         | 4.29.1   | ✓      | 11727.0    | 84.71        | 134.93        |
| express                  | 4.22.2   | ✓      | 10694.0    | 92.94        | 1.91          |
| express-with-middlewares | 4.22.2   | ✓      | 9760.6     | 101.87       | 3.63          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
