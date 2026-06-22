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
* __Run:__ Mon Jun 22 2026 03:27:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 57537.6    | 16.87        | 10.26         |
| polka                    | 0.5.2    | ✓      | 56675.2    | 17.15        | 10.11         |
| connect                  | 3.7.0    | ✗      | 56353.6    | 17.24        | 10.05         |
| fastify                  | 4.29.1   | ✓      | 55528.0    | 17.50        | 9.96          |
| server-base              | 7.1.32   | ✗      | 54500.8    | 17.85        | 9.72          |
| server-base-router       | 7.1.32   | ✓      | 54372.0    | 17.89        | 9.70          |
| kita                     | 1.1.36   | ✓      | 54358.4    | 17.90        | 9.75          |
| rayo                     | 1.4.6    | ✓      | 54199.2    | 17.95        | 9.67          |
| connect-router           | 1.3.8    | ✓      | 53892.0    | 18.06        | 9.61          |
| 0http                    | 3.5.3    | ✓      | 49340.0    | 19.78        | 8.80          |
| polkadot                 | 1.0.0    | ✗      | 47162.4    | 20.70        | 8.41          |
| h3                       | 1.15.11  | ✗      | 44505.6    | 21.97        | 7.94          |
| hono                     | 4.12.26  | ✓      | 44083.2    | 22.18        | 7.23          |
| take-five                | 2.0.0    | ✓      | 44064.8    | 22.19        | 15.84         |
| koa                      | 2.16.4   | ✗      | 44059.2    | 22.20        | 7.86          |
| restana                  | 4.9.9    | ✓      | 44016.8    | 22.22        | 7.85          |
| restify                  | 11.1.0   | ✓      | 42081.6    | 23.26        | 7.58          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 42051.2    | 23.28        | 7.50          |
| h3-router                | 1.15.11  | ✓      | 41693.6    | 23.48        | 7.44          |
| koa-router               | 12.0.1   | ✓      | 40867.2    | 23.96        | 7.29          |
| hapi                     | 21.4.9   | ✓      | 38013.6    | 25.80        | 6.78          |
| express                  | 4.22.2   | ✓      | 13414.0    | 74.00        | 2.39          |
| express-with-middlewares | 4.22.2   | ✓      | 12510.6    | 79.37        | 4.65          |
| fastify-big-json         | 4.29.1   | ✓      | 11714.2    | 84.79        | 134.77        |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
