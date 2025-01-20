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
* __Run:__ Mon Jan 20 2025 01:26:56 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 47864.0    | 20.39        | 8.54          |
| rayo                     | 1.4.6    | ✓      | 47604.8    | 20.50        | 8.49          |
| polka                    | 0.5.2    | ✓      | 47259.2    | 20.65        | 8.43          |
| connect                  | 3.7.0    | ✗      | 47149.6    | 20.70        | 8.41          |
| kita                     | 1.1.36   | ✓      | 46920.8    | 20.80        | 8.41          |
| server-base              | 7.1.32   | ✗      | 46638.4    | 20.93        | 8.32          |
| server-base-router       | 7.1.32   | ✓      | 46056.8    | 21.19        | 8.21          |
| polkadot                 | 1.0.0    | ✗      | 45868.0    | 21.31        | 8.18          |
| fastify                  | 4.29.0   | ✓      | 45432.8    | 21.51        | 8.15          |
| 0http                    | 3.5.3    | ✓      | 44994.4    | 21.73        | 8.02          |
| connect-router           | 1.3.8    | ✓      | 43388.8    | 22.54        | 7.74          |
| h3                       | 1.13.1   | ✗      | 42801.6    | 22.87        | 7.63          |
| h3-router                | 1.13.1   | ✓      | 41363.2    | 23.68        | 7.38          |
| hono                     | 4.6.17   | ✓      | 40863.2    | 23.97        | 6.70          |
| restana                  | 4.9.9    | ✓      | 40787.2    | 24.02        | 7.27          |
| koa                      | 2.15.3   | ✗      | 37526.6    | 26.16        | 6.69          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 36177.4    | 27.13        | 6.45          |
| restify                  | 11.1.0   | ✓      | 35912.2    | 27.34        | 6.47          |
| koa-router               | 12.0.1   | ✓      | 35284.2    | 27.82        | 6.29          |
| take-five                | 2.0.0    | ✓      | 35256.2    | 27.88        | 12.67         |
| hapi                     | 21.3.12  | ✓      | 31909.6    | 30.83        | 5.69          |
| fastify-big-json         | 4.29.0   | ✓      | 11769.0    | 84.40        | 135.40        |
| express                  | 4.21.2   | ✓      | 11261.2    | 88.22        | 2.01          |
| express-with-middlewares | 4.21.2   | ✓      | 10511.8    | 94.53        | 3.91          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
