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
* __Run:__ Mon Jun 03 2024 01:18:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| kita                     | 1.1.36   | ✓      | 45302.4    | 21.57        | 8.12          |
| bare                     | v20.13.1 | ✗      | 45105.6    | 21.68        | 8.04          |
| fastify                  | 4.27.0   | ✓      | 44144.0    | 22.15        | 7.91          |
| polka                    | 0.5.2    | ✓      | 44051.2    | 22.19        | 7.86          |
| polkadot                 | 1.0.0    | ✗      | 43767.2    | 22.35        | 7.81          |
| server-base-router       | 7.1.32   | ✓      | 43243.2    | 22.62        | 7.71          |
| connect                  | 3.7.0    | ✗      | 43125.6    | 22.69        | 7.69          |
| rayo                     | 1.4.6    | ✓      | 42887.2    | 22.82        | 7.65          |
| server-base              | 7.1.32   | ✗      | 42855.2    | 22.83        | 7.64          |
| 0http                    | 3.5.3    | ✓      | 40642.4    | 24.11        | 7.25          |
| connect-router           | 1.3.8    | ✓      | 40480.8    | 24.20        | 7.22          |
| h3                       | 1.11.1   | ✗      | 39761.6    | 24.66        | 7.09          |
| h3-router                | 1.11.1   | ✓      | 38617.6    | 25.40        | 6.89          |
| hono                     | 4.4.2    | ✓      | 37644.8    | 26.07        | 6.71          |
| restana                  | 4.9.9    | ✓      | 35416.2    | 27.74        | 6.32          |
| koa                      | 2.15.3   | ✗      | 35150.2    | 27.95        | 6.27          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 32946.8    | 29.86        | 5.88          |
| take-five                | 2.0.0    | ✓      | 32839.4    | 29.94        | 11.81         |
| restify                  | 11.1.0   | ✓      | 32418.6    | 30.35        | 5.84          |
| koa-router               | 12.0.1   | ✓      | 31632.6    | 31.10        | 5.64          |
| hapi                     | 21.3.9   | ✓      | 30115.6    | 32.70        | 5.37          |
| fastify-big-json         | 4.27.0   | ✓      | 11408.4    | 87.10        | 131.27        |
| express                  | 4.19.2   | ✓      | 10686.2    | 92.99        | 1.91          |
| express-with-middlewares | 4.19.2   | ✓      | 9992.8     | 99.48        | 3.72          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
