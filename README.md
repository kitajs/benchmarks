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
* __Node:__ `v20.19.4`
* __Run:__ Mon Jul 28 2025 01:44:56 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.4 | ✗      | 47728.8    | 20.46        | 8.51          |
| fastify                  | 4.29.1   | ✓      | 47604.0    | 20.52        | 8.54          |
| polka                    | 0.5.2    | ✓      | 47428.0    | 20.59        | 8.46          |
| rayo                     | 1.4.6    | ✓      | 46936.8    | 20.79        | 8.37          |
| kita                     | 1.1.36   | ✓      | 46453.6    | 21.01        | 8.33          |
| connect                  | 3.7.0    | ✗      | 46222.2    | 21.13        | 8.24          |
| polkadot                 | 1.0.0    | ✗      | 45466.4    | 21.50        | 8.11          |
| server-base-router       | 7.1.32   | ✓      | 45236.8    | 21.61        | 8.07          |
| server-base              | 7.1.32   | ✗      | 44931.2    | 21.76        | 8.01          |
| 0http                    | 3.5.3    | ✓      | 43758.4    | 22.36        | 7.80          |
| connect-router           | 1.3.8    | ✓      | 43628.8    | 22.41        | 7.78          |
| h3                       | 1.15.3   | ✗      | 42836.8    | 22.84        | 7.64          |
| h3-router                | 1.15.3   | ✓      | 40834.4    | 23.99        | 7.28          |
| restana                  | 4.9.9    | ✓      | 40080.0    | 24.45        | 7.15          |
| koa                      | 2.16.1   | ✗      | 37360.0    | 26.26        | 6.66          |
| hono                     | 4.8.9    | ✓      | 36328.0    | 27.02        | 5.96          |
| restify                  | 11.1.0   | ✓      | 35561.4    | 27.62        | 6.41          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35157.8    | 27.95        | 6.27          |
| take-five                | 2.0.0    | ✓      | 34644.2    | 28.35        | 12.46         |
| koa-router               | 12.0.1   | ✓      | 33231.4    | 29.60        | 5.93          |
| hapi                     | 21.4.0   | ✓      | 31004.8    | 31.75        | 5.53          |
| fastify-big-json         | 4.29.1   | ✓      | 11874.4    | 83.65        | 136.62        |
| express                  | 4.21.2   | ✓      | 11107.2    | 89.45        | 1.98          |
| express-with-middlewares | 4.21.2   | ✓      | 10371.2    | 95.83        | 3.86          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
