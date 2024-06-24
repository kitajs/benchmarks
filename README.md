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
* __Node:__ `v20.14.0`
* __Run:__ Mon Jun 24 2024 01:19:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.14.0 | ✗      | 46184.8    | 21.15        | 8.24          |
| fastify                  | 4.28.0   | ✓      | 45653.6    | 21.40        | 8.19          |
| kita                     | 1.1.36   | ✓      | 45336.0    | 21.56        | 8.13          |
| polka                    | 0.5.2    | ✓      | 44924.8    | 21.76        | 8.01          |
| connect                  | 3.7.0    | ✗      | 44810.4    | 21.82        | 7.99          |
| 0http                    | 3.5.3    | ✓      | 44796.8    | 21.83        | 7.99          |
| server-base              | 7.1.32   | ✗      | 44566.4    | 21.94        | 7.95          |
| rayo                     | 1.4.6    | ✓      | 44216.8    | 22.12        | 7.89          |
| server-base-router       | 7.1.32   | ✓      | 44175.2    | 22.14        | 7.88          |
| polkadot                 | 1.0.0    | ✗      | 44159.2    | 22.15        | 7.88          |
| connect-router           | 1.3.8    | ✓      | 42723.2    | 22.90        | 7.62          |
| h3                       | 1.12.0   | ✗      | 40967.2    | 23.91        | 7.31          |
| h3-router                | 1.12.0   | ✓      | 39925.6    | 24.55        | 7.12          |
| hono                     | 4.4.7    | ✓      | 38886.4    | 25.21        | 6.93          |
| restana                  | 4.9.9    | ✓      | 38739.4    | 25.32        | 6.91          |
| koa                      | 2.15.3   | ✗      | 35704.2    | 27.50        | 6.37          |
| take-five                | 2.0.0    | ✓      | 34007.6    | 28.90        | 12.23         |
| restify                  | 11.1.0   | ✓      | 33849.6    | 29.04        | 6.10          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33772.8    | 29.11        | 6.02          |
| koa-router               | 12.0.1   | ✓      | 33291.6    | 29.53        | 5.94          |
| hapi                     | 21.3.10  | ✓      | 30340.4    | 32.45        | 5.41          |
| fastify-big-json         | 4.28.0   | ✓      | 11530.6    | 86.14        | 132.67        |
| express                  | 4.19.2   | ✓      | 10536.2    | 94.32        | 1.88          |
| express-with-middlewares | 4.19.2   | ✓      | 10057.4    | 98.81        | 3.74          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
