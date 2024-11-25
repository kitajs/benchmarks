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
* __Run:__ Mon Nov 25 2024 01:31:07 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.0 | ✗      | 47640.0    | 20.48        | 8.50          |
| polka                    | 0.5.2    | ✓      | 47048.0    | 20.75        | 8.39          |
| kita                     | 1.1.36   | ✓      | 46684.8    | 20.92        | 8.37          |
| fastify                  | 4.28.1   | ✓      | 46638.4    | 20.94        | 8.36          |
| rayo                     | 1.4.6    | ✓      | 46343.2    | 21.08        | 8.27          |
| server-base              | 7.1.32   | ✗      | 46020.0    | 21.22        | 8.21          |
| connect                  | 3.7.0    | ✗      | 45999.8    | 21.24        | 8.20          |
| server-base-router       | 7.1.32   | ✓      | 45635.2    | 21.41        | 8.14          |
| polkadot                 | 1.0.0    | ✗      | 45535.2    | 21.47        | 8.12          |
| 0http                    | 3.5.3    | ✓      | 44660.8    | 21.89        | 7.96          |
| connect-router           | 1.3.8    | ✓      | 43468.8    | 22.50        | 7.75          |
| h3                       | 1.13.0   | ✗      | 42492.0    | 23.04        | 7.58          |
| h3-router                | 1.13.0   | ✓      | 41372.0    | 23.67        | 7.38          |
| hono                     | 4.6.11   | ✓      | 39691.2    | 24.69        | 7.08          |
| restana                  | 4.9.9    | ✓      | 38596.0    | 25.41        | 6.88          |
| koa                      | 2.15.3   | ✗      | 37435.8    | 26.22        | 6.68          |
| restify                  | 11.1.0   | ✓      | 35537.8    | 27.65        | 6.41          |
| take-five                | 2.0.0    | ✓      | 35434.2    | 27.71        | 12.74         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35348.4    | 27.81        | 6.30          |
| koa-router               | 12.0.1   | ✓      | 34660.6    | 28.33        | 6.18          |
| hapi                     | 21.3.12  | ✓      | 31779.0    | 30.96        | 5.67          |
| fastify-big-json         | 4.28.1   | ✓      | 11820.2    | 84.03        | 135.99        |
| express                  | 4.21.1   | ✓      | 11028.4    | 90.09        | 1.97          |
| express-with-middlewares | 4.21.1   | ✓      | 10027.5    | 99.13        | 3.73          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
