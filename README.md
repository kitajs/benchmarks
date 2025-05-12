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
* __Node:__ `v20.19.1`
* __Run:__ Mon May 12 2025 01:37:17 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.1 | ✗      | 48088.8    | 20.31        | 8.58          |
| polka                    | 0.5.2    | ✓      | 46545.6    | 20.98        | 8.30          |
| kita                     | 1.1.36   | ✓      | 46364.8    | 21.06        | 8.31          |
| fastify                  | 4.29.1   | ✓      | 46148.8    | 21.17        | 8.27          |
| rayo                     | 1.4.6    | ✓      | 46148.0    | 21.14        | 8.23          |
| connect                  | 3.7.0    | ✗      | 46092.8    | 21.17        | 8.22          |
| server-base-router       | 7.1.32   | ✓      | 46080.0    | 21.17        | 8.22          |
| server-base              | 7.1.32   | ✗      | 45660.0    | 21.39        | 8.14          |
| polkadot                 | 1.0.0    | ✗      | 45604.8    | 21.43        | 8.13          |
| h3                       | 1.15.3   | ✗      | 42858.4    | 22.83        | 7.64          |
| connect-router           | 1.3.8    | ✓      | 42624.2    | 22.94        | 7.60          |
| h3-router                | 1.15.3   | ✓      | 42553.6    | 23.00        | 7.59          |
| hono                     | 4.7.9    | ✓      | 40446.4    | 24.21        | 6.63          |
| restana                  | 4.9.9    | ✓      | 39904.8    | 24.56        | 7.12          |
| 0http                    | 3.5.3    | ✓      | 38895.4    | 25.22        | 6.94          |
| koa                      | 2.16.1   | ✗      | 36772.8    | 26.69        | 6.56          |
| take-five                | 2.0.0    | ✓      | 35905.4    | 27.35        | 12.91         |
| restify                  | 11.1.0   | ✓      | 35373.8    | 27.80        | 6.38          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34543.8    | 28.43        | 6.16          |
| koa-router               | 12.0.1   | ✓      | 33204.0    | 29.61        | 5.92          |
| hapi                     | 21.4.0   | ✓      | 31656.4    | 31.09        | 5.65          |
| fastify-big-json         | 4.29.1   | ✓      | 12062.0    | 82.36        | 138.77        |
| express                  | 4.21.2   | ✓      | 10899.2    | 91.15        | 1.94          |
| express-with-middlewares | 4.21.2   | ✓      | 10255.6    | 96.90        | 3.81          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
