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
* __Run:__ Mon Oct 27 2025 01:38:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.5 | ✗      | 72338.0    | 13.32        | 12.90         |
| polka                    | 0.5.2    | ✓      | 71221.2    | 13.55        | 12.70         |
| connect                  | 3.7.0    | ✗      | 70876.4    | 13.62        | 12.64         |
| kita                     | 1.1.36   | ✓      | 70747.2    | 13.64        | 12.68         |
| rayo                     | 1.4.6    | ✓      | 69048.4    | 13.99        | 12.31         |
| server-base              | 7.1.32   | ✗      | 69023.6    | 13.99        | 12.31         |
| fastify                  | 4.29.1   | ✓      | 68719.6    | 14.06        | 12.32         |
| server-base-router       | 7.1.32   | ✓      | 68222.0    | 14.16        | 12.17         |
| connect-router           | 1.3.8    | ✓      | 64999.6    | 14.88        | 11.59         |
| polkadot                 | 1.0.0    | ✗      | 61722.4    | 15.71        | 11.01         |
| 0http                    | 3.5.3    | ✓      | 59594.4    | 16.28        | 10.63         |
| h3                       | 1.15.4   | ✗      | 57504.0    | 16.90        | 10.25         |
| koa                      | 2.16.3   | ✗      | 55637.6    | 17.49        | 9.92          |
| h3-router                | 1.15.4   | ✓      | 55400.0    | 17.55        | 9.88          |
| hono                     | 4.10.3   | ✓      | 55040.8    | 17.67        | 9.03          |
| restana                  | 4.9.9    | ✓      | 54906.4    | 17.72        | 9.79          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 52271.2    | 18.63        | 9.32          |
| take-five                | 2.0.0    | ✓      | 51763.2    | 18.82        | 18.61         |
| restify                  | 11.1.0   | ✓      | 50500.8    | 19.29        | 9.10          |
| koa-router               | 12.0.1   | ✓      | 48613.6    | 20.07        | 8.67          |
| hapi                     | 21.4.3   | ✓      | 42920.8    | 22.80        | 7.65          |
| express                  | 4.21.2   | ✓      | 14037.2    | 70.69        | 2.50          |
| fastify-big-json         | 4.29.1   | ✓      | 12942.4    | 76.70        | 148.92        |
| express-with-middlewares | 4.21.2   | ✓      | 12880.0    | 77.10        | 4.79          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
