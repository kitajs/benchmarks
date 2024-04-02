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
* __Node:__ `v20.11.1`
* __Run:__ Tue Apr 02 2024 14:35:41 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| kita                     | 1.1.35   | ✓      | 46968.8    | 20.79        | 8.42          |
| bare                     | v20.11.1 | ✗      | 45199.2    | 21.62        | 8.06          |
| polkadot                 | 1.0.0    | ✗      | 44650.4    | 21.91        | 7.96          |
| rayo                     | 1.4.6    | ✓      | 44380.8    | 22.03        | 7.91          |
| polka                    | 0.5.2    | ✓      | 44282.4    | 22.09        | 7.90          |
| fastify                  | 4.26.2   | ✓      | 44169.6    | 22.15        | 7.92          |
| connect                  | 3.7.0    | ✗      | 43648.0    | 22.42        | 7.78          |
| server-base              | 7.1.32   | ✗      | 43361.6    | 22.57        | 7.73          |
| server-base-router       | 7.1.32   | ✓      | 43236.8    | 22.63        | 7.71          |
| connect-router           | 1.3.8    | ✓      | 41682.4    | 23.49        | 7.43          |
| h3                       | 1.11.1   | ✗      | 41583.2    | 23.55        | 7.42          |
| h3-router                | 1.11.1   | ✓      | 40454.4    | 24.22        | 7.21          |
| hono                     | 4.2.0    | ✓      | 40158.4    | 24.40        | 7.16          |
| koa                      | 2.15.2   | ✗      | 36698.6    | 26.75        | 6.54          |
| 0http                    | 3.5.2    | ✓      | 36508.0    | 26.89        | 6.51          |
| take-five                | 2.0.0    | ✓      | 34835.0    | 28.20        | 12.52         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34332.0    | 28.62        | 6.12          |
| restana                  | 4.9.7    | ✓      | 33945.8    | 28.96        | 6.05          |
| restify                  | 11.1.0   | ✓      | 33003.2    | 29.79        | 5.95          |
| koa-router               | 12.0.1   | ✓      | 32696.4    | 30.08        | 5.83          |
| hapi                     | 21.3.7   | ✓      | 31180.6    | 31.56        | 5.56          |
| fastify-big-json         | 4.26.2   | ✓      | 11827.4    | 83.98        | 136.08        |
| express                  | 4.19.2   | ✓      | 10773.6    | 92.23        | 1.92          |
| express-with-middlewares | 4.19.2   | ✓      | 9913.4     | 100.29       | 3.69          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
