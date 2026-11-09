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
* __Node:__ `v20.20.2`
* __Run:__ Mon Nov 09 2026 04:21:54 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 46229.6    | 21.12        | 8.24          |
| kita                     | 1.1.36   | ✓      | 45100.8    | 21.68        | 8.09          |
| connect                  | 3.7.0    | ✗      | 44601.6    | 21.93        | 7.95          |
| fastify                  | 4.29.1   | ✓      | 44427.2    | 22.02        | 7.96          |
| polka                    | 0.5.2    | ✓      | 44319.2    | 22.06        | 7.90          |
| rayo                     | 1.4.6    | ✓      | 43962.4    | 22.25        | 7.84          |
| server-base              | 7.1.32   | ✗      | 43908.0    | 22.27        | 7.83          |
| server-base-router       | 7.1.32   | ✓      | 43826.4    | 22.32        | 7.82          |
| connect-router           | 1.3.8    | ✓      | 42627.2    | 22.96        | 7.60          |
| polkadot                 | 1.0.0    | ✗      | 42616.0    | 22.97        | 7.60          |
| 0http                    | 3.5.3    | ✓      | 42275.2    | 23.16        | 7.54          |
| h3                       | 1.15.11  | ✗      | 40199.2    | 24.38        | 7.17          |
| h3-router                | 1.15.11  | ✓      | 39339.2    | 24.92        | 7.02          |
| hono                     | 4.13.17  | ✓      | 37796.8    | 25.95        | 6.20          |
| restana                  | 4.9.9    | ✓      | 36253.4    | 27.08        | 6.47          |
| koa                      | 2.16.4   | ✗      | 34979.4    | 28.09        | 6.24          |
| take-five                | 2.0.0    | ✓      | 34389.0    | 28.58        | 12.36         |
| restify                  | 11.1.0   | ✓      | 33219.8    | 29.60        | 5.99          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33097.0    | 29.71        | 5.90          |
| koa-router               | 12.0.1   | ✓      | 31739.6    | 31.01        | 5.66          |
| hapi                     | 21.4.13  | ✓      | 30385.2    | 32.41        | 5.42          |
| fastify-big-json         | 4.29.1   | ✓      | 11608.2    | 85.58        | 133.56        |
| express                  | 4.22.3   | ✓      | 10924.6    | 90.96        | 1.95          |
| express-with-middlewares | 4.22.3   | ✓      | 9752.0     | 101.93       | 3.63          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
