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
* __Node:__ `v20.13.1`
* __Run:__ Mon May 20 2024 01:17:14 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.13.1 | ✗      | 45928.0    | 21.26        | 8.19          |
| fastify                  | 4.27.0   | ✓      | 45706.4    | 21.37        | 8.19          |
| kita                     | 1.1.36   | ✓      | 45686.4    | 21.36        | 8.19          |
| rayo                     | 1.4.6    | ✓      | 45458.4    | 21.50        | 8.11          |
| connect                  | 3.7.0    | ✗      | 45200.0    | 21.64        | 8.06          |
| polkadot                 | 1.0.0    | ✗      | 45199.2    | 21.62        | 8.06          |
| 0http                    | 3.5.3    | ✓      | 44799.2    | 21.83        | 7.99          |
| polka                    | 0.5.2    | ✓      | 44780.8    | 21.85        | 7.99          |
| server-base-router       | 7.1.32   | ✓      | 44239.2    | 22.11        | 7.89          |
| server-base              | 7.1.32   | ✗      | 43591.2    | 22.44        | 7.77          |
| connect-router           | 1.3.8    | ✓      | 42762.4    | 22.88        | 7.63          |
| h3                       | 1.11.1   | ✗      | 41671.2    | 23.51        | 7.43          |
| h3-router                | 1.11.1   | ✓      | 40580.8    | 24.15        | 7.24          |
| hono                     | 4.3.8    | ✓      | 39188.0    | 25.02        | 6.99          |
| restana                  | 4.9.9    | ✓      | 38549.4    | 25.44        | 6.87          |
| koa                      | 2.15.3   | ✗      | 35665.0    | 27.53        | 6.36          |
| take-five                | 2.0.0    | ✓      | 34768.2    | 28.27        | 12.50         |
| restify                  | 11.1.0   | ✓      | 33727.2    | 29.14        | 6.08          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33687.6    | 29.18        | 6.01          |
| koa-router               | 12.0.1   | ✓      | 33248.2    | 29.57        | 5.93          |
| hapi                     | 21.3.9   | ✓      | 30853.4    | 31.90        | 5.50          |
| fastify-big-json         | 4.27.0   | ✓      | 11586.4    | 85.76        | 133.28        |
| express                  | 4.19.2   | ✓      | 10536.2    | 94.33        | 1.88          |
| express-with-middlewares | 4.19.2   | ✓      | 9793.5     | 101.51       | 3.64          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
