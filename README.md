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
* __Node:__ `v20.12.2`
* __Run:__ Mon May 06 2024 01:17:25 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| kita                     | 1.1.36   | ✓      | 48035.2    | 20.32        | 8.61          |
| bare                     | v20.12.2 | ✗      | 46479.2    | 21.02        | 8.29          |
| 0http                    | 3.5.3    | ✓      | 46341.6    | 21.07        | 8.26          |
| polkadot                 | 1.0.0    | ✗      | 46158.4    | 21.17        | 8.23          |
| server-base-router       | 7.1.32   | ✓      | 45691.2    | 21.40        | 8.15          |
| fastify                  | 4.26.2   | ✓      | 45654.4    | 21.39        | 8.19          |
| polka                    | 0.5.2    | ✓      | 45567.2    | 21.47        | 8.13          |
| connect                  | 3.7.0    | ✗      | 45500.8    | 21.48        | 8.11          |
| rayo                     | 1.4.6    | ✓      | 45204.8    | 21.63        | 8.06          |
| server-base              | 7.1.32   | ✗      | 45044.0    | 21.72        | 8.03          |
| h3                       | 1.11.1   | ✗      | 44852.8    | 21.80        | 8.00          |
| h3-router                | 1.11.1   | ✓      | 43084.0    | 22.72        | 7.68          |
| connect-router           | 1.3.8    | ✓      | 42056.0    | 23.28        | 7.50          |
| hono                     | 4.3.2    | ✓      | 40025.6    | 24.48        | 7.14          |
| restana                  | 4.9.9    | ✓      | 38453.6    | 25.51        | 6.86          |
| koa                      | 2.15.3   | ✗      | 36911.4    | 26.58        | 6.58          |
| take-five                | 2.0.0    | ✓      | 35333.4    | 27.80        | 12.70         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35008.2    | 28.07        | 6.24          |
| koa-router               | 12.0.1   | ✓      | 34071.0    | 28.87        | 6.08          |
| restify                  | 11.1.0   | ✓      | 34023.6    | 28.89        | 6.13          |
| hapi                     | 21.3.9   | ✓      | 31669.2    | 31.06        | 5.65          |
| fastify-big-json         | 4.26.2   | ✓      | 11708.4    | 84.84        | 134.71        |
| express                  | 4.19.2   | ✓      | 10942.8    | 90.80        | 1.95          |
| express-with-middlewares | 4.19.2   | ✓      | 10112.3    | 98.28        | 3.76          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
