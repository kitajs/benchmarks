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
* __Run:__ Mon Nov 11 2024 01:27:49 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.0 | ✗      | 47859.2    | 20.41        | 8.54          |
| connect                  | 3.7.0    | ✗      | 47438.4    | 20.57        | 8.46          |
| fastify                  | 4.28.1   | ✓      | 46901.6    | 20.81        | 8.41          |
| kita                     | 1.1.36   | ✓      | 46770.4    | 20.87        | 8.39          |
| server-base              | 7.1.32   | ✗      | 46342.4    | 21.07        | 8.26          |
| 0http                    | 3.5.3    | ✓      | 46336.0    | 21.08        | 8.26          |
| server-base-router       | 7.1.32   | ✓      | 46219.2    | 21.13        | 8.24          |
| polkadot                 | 1.0.0    | ✗      | 45943.2    | 21.27        | 8.19          |
| rayo                     | 1.4.6    | ✓      | 45889.6    | 21.27        | 8.18          |
| polka                    | 0.5.2    | ✓      | 45520.0    | 21.47        | 8.12          |
| connect-router           | 1.3.8    | ✓      | 43515.2    | 22.47        | 7.76          |
| h3                       | 1.13.0   | ✗      | 42872.0    | 22.83        | 7.65          |
| h3-router                | 1.13.0   | ✓      | 42328.8    | 23.14        | 7.55          |
| hono                     | 4.6.9    | ✓      | 40666.4    | 24.09        | 7.25          |
| restana                  | 4.9.9    | ✓      | 38831.8    | 25.25        | 6.93          |
| koa                      | 2.15.3   | ✗      | 36957.8    | 26.56        | 6.59          |
| take-five                | 2.0.0    | ✓      | 35599.8    | 27.59        | 12.80         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35376.6    | 27.76        | 6.31          |
| restify                  | 11.1.0   | ✓      | 34797.8    | 28.21        | 6.27          |
| koa-router               | 12.0.1   | ✓      | 34430.8    | 28.51        | 6.14          |
| hapi                     | 21.3.12  | ✓      | 31837.0    | 30.89        | 5.68          |
| fastify-big-json         | 4.28.1   | ✓      | 12046.0    | 82.45        | 138.59        |
| express                  | 4.21.1   | ✓      | 10962.8    | 90.64        | 1.96          |
| express-with-middlewares | 4.21.1   | ✓      | 10172.0    | 97.68        | 3.78          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
