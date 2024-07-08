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
* __Node:__ `v20.15.0`
* __Run:__ Mon Jul 08 2024 01:20:33 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.15.0 | ✗      | 47902.4    | 20.39        | 8.54          |
| fastify                  | 4.28.1   | ✓      | 46194.4    | 21.14        | 8.28          |
| kita                     | 1.1.36   | ✓      | 46079.2    | 21.19        | 8.26          |
| polka                    | 0.5.2    | ✓      | 45780.0    | 21.34        | 8.16          |
| connect                  | 3.7.0    | ✗      | 45508.8    | 21.47        | 8.12          |
| server-base              | 7.1.32   | ✗      | 45208.8    | 21.63        | 8.06          |
| rayo                     | 1.4.6    | ✓      | 44947.2    | 21.76        | 8.02          |
| polkadot                 | 1.0.0    | ✗      | 44803.2    | 21.81        | 7.99          |
| 0http                    | 3.5.3    | ✓      | 44146.4    | 22.17        | 7.87          |
| server-base-router       | 7.1.32   | ✓      | 43949.6    | 22.26        | 7.84          |
| connect-router           | 1.3.8    | ✓      | 42392.0    | 23.08        | 7.56          |
| h3-router                | 1.12.0   | ✓      | 40497.6    | 24.19        | 7.22          |
| hono                     | 4.4.12   | ✓      | 39964.0    | 24.52        | 7.13          |
| h3                       | 1.12.0   | ✗      | 39932.0    | 24.53        | 7.12          |
| restana                  | 4.9.9    | ✓      | 37526.2    | 26.15        | 6.69          |
| koa                      | 2.15.3   | ✗      | 36140.6    | 27.16        | 6.45          |
| take-five                | 2.0.0    | ✓      | 34753.0    | 28.27        | 12.50         |
| restify                  | 11.1.0   | ✓      | 33835.8    | 29.04        | 6.10          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33752.6    | 29.13        | 6.02          |
| koa-router               | 12.0.1   | ✓      | 33197.4    | 29.62        | 5.92          |
| hapi                     | 21.3.10  | ✓      | 30663.6    | 32.10        | 5.47          |
| fastify-big-json         | 4.28.1   | ✓      | 11667.2    | 85.14        | 134.24        |
| express                  | 4.19.2   | ✓      | 10794.2    | 92.08        | 1.92          |
| express-with-middlewares | 4.19.2   | ✓      | 10034.4    | 99.03        | 3.73          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
