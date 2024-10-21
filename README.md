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
* __Run:__ Mon Oct 21 2024 01:29:11 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| h3-router                | 1.13.0   | ✓      | 49639.2    | 19.65        | 8.85          |
| bare                     | v20.18.0 | ✗      | 48215.2    | 20.27        | 8.60          |
| fastify                  | 4.28.1   | ✓      | 47844.8    | 20.38        | 8.58          |
| polka                    | 0.5.2    | ✓      | 47705.6    | 20.47        | 8.51          |
| kita                     | 1.1.36   | ✓      | 47130.4    | 20.70        | 8.45          |
| rayo                     | 1.4.6    | ✓      | 46841.6    | 20.85        | 8.35          |
| connect                  | 3.7.0    | ✗      | 46217.6    | 21.13        | 8.24          |
| server-base              | 7.1.32   | ✗      | 45732.0    | 21.34        | 8.16          |
| server-base-router       | 7.1.32   | ✓      | 45388.0    | 21.54        | 8.09          |
| polkadot                 | 1.0.0    | ✗      | 45048.0    | 21.70        | 8.03          |
| 0http                    | 3.5.3    | ✓      | 44930.4    | 21.76        | 8.01          |
| connect-router           | 1.3.8    | ✓      | 43147.2    | 22.68        | 7.69          |
| h3                       | 1.13.0   | ✗      | 41645.6    | 23.52        | 7.43          |
| restana                  | 4.9.9    | ✓      | 40039.2    | 24.47        | 7.14          |
| hono                     | 4.6.5    | ✓      | 39939.2    | 24.54        | 7.12          |
| koa                      | 2.15.3   | ✗      | 37839.0    | 25.92        | 6.75          |
| take-five                | 2.0.0    | ✓      | 36117.8    | 27.17        | 12.98         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35611.4    | 27.58        | 6.35          |
| restify                  | 11.1.0   | ✓      | 35138.0    | 27.96        | 6.33          |
| koa-router               | 12.0.1   | ✓      | 33581.2    | 29.30        | 5.99          |
| hapi                     | 21.3.10  | ✓      | 31585.0    | 31.15        | 5.63          |
| fastify-big-json         | 4.28.1   | ✓      | 11998.8    | 82.81        | 138.05        |
| express                  | 4.21.1   | ✓      | 10897.0    | 91.15        | 1.94          |
| express-with-middlewares | 4.21.1   | ✓      | 10106.2    | 98.36        | 3.76          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
