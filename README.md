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
* __Node:__ `v20.18.0`
* __Run:__ Mon Oct 28 2024 01:29:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.0 | ✗      | 47136.0    | 20.70        | 8.41          |
| kita                     | 1.1.36   | ✓      | 46696.8    | 20.92        | 8.37          |
| connect                  | 3.7.0    | ✗      | 46184.0    | 21.15        | 8.24          |
| rayo                     | 1.4.6    | ✓      | 46174.4    | 21.15        | 8.23          |
| fastify                  | 4.28.1   | ✓      | 46019.2    | 21.22        | 8.25          |
| polka                    | 0.5.2    | ✓      | 45936.0    | 21.27        | 8.19          |
| server-base-router       | 7.1.32   | ✓      | 44892.0    | 21.78        | 8.01          |
| polkadot                 | 1.0.0    | ✗      | 44794.4    | 21.82        | 7.99          |
| server-base              | 7.1.32   | ✗      | 44270.4    | 22.09        | 7.90          |
| 0http                    | 3.5.3    | ✓      | 43028.0    | 22.74        | 7.67          |
| connect-router           | 1.3.8    | ✓      | 42755.2    | 22.89        | 7.62          |
| h3                       | 1.13.0   | ✗      | 41536.8    | 23.59        | 7.41          |
| hono                     | 4.6.7    | ✓      | 40050.4    | 24.47        | 7.14          |
| h3-router                | 1.13.0   | ✓      | 39867.2    | 24.59        | 7.11          |
| restana                  | 4.9.9    | ✓      | 37510.6    | 26.15        | 6.69          |
| koa                      | 2.15.3   | ✗      | 36303.8    | 27.04        | 6.47          |
| take-five                | 2.0.0    | ✓      | 36197.0    | 27.11        | 13.01         |
| restify                  | 11.1.0   | ✓      | 34784.4    | 28.25        | 6.27          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33979.6    | 28.92        | 6.06          |
| koa-router               | 12.0.1   | ✓      | 33530.4    | 29.32        | 5.98          |
| hapi                     | 21.3.12  | ✓      | 31444.0    | 31.30        | 5.61          |
| fastify-big-json         | 4.28.1   | ✓      | 11889.0    | 83.53        | 136.79        |
| express                  | 4.21.1   | ✓      | 10881.2    | 91.32        | 1.94          |
| express-with-middlewares | 4.21.1   | ✓      | 9986.8     | 99.52        | 3.71          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
