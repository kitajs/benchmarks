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
* __Node:__ `v20.16.0`
* __Run:__ Mon Aug 05 2024 01:21:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.16.0 | ✗      | 47068.8    | 20.74        | 8.39          |
| kita                     | 1.1.36   | ✓      | 46655.2    | 20.93        | 8.36          |
| polka                    | 0.5.2    | ✓      | 46292.8    | 21.10        | 8.26          |
| fastify                  | 4.28.1   | ✓      | 45872.0    | 21.28        | 8.22          |
| polkadot                 | 1.0.0    | ✗      | 45743.2    | 21.36        | 8.16          |
| connect                  | 3.7.0    | ✗      | 45487.2    | 21.48        | 8.11          |
| rayo                     | 1.4.6    | ✓      | 45317.6    | 21.59        | 8.08          |
| server-base              | 7.1.32   | ✗      | 44484.8    | 22.01        | 7.93          |
| server-base-router       | 7.1.32   | ✓      | 44197.6    | 22.13        | 7.88          |
| 0http                    | 3.5.3    | ✓      | 43016.8    | 22.75        | 7.67          |
| connect-router           | 1.3.8    | ✓      | 42429.6    | 23.07        | 7.57          |
| h3                       | 1.12.0   | ✗      | 41655.2    | 23.51        | 7.43          |
| h3-router                | 1.12.0   | ✓      | 39810.4    | 24.62        | 7.10          |
| hono                     | 4.5.3    | ✓      | 39524.8    | 24.80        | 7.05          |
| restana                  | 4.9.9    | ✓      | 38471.0    | 25.50        | 6.86          |
| koa                      | 2.15.3   | ✗      | 36504.2    | 26.87        | 6.51          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35105.0    | 27.98        | 6.26          |
| take-five                | 2.0.0    | ✓      | 34787.8    | 28.26        | 12.51         |
| restify                  | 11.1.0   | ✓      | 34296.4    | 28.64        | 6.18          |
| koa-router               | 12.0.1   | ✓      | 33427.6    | 29.39        | 5.96          |
| hapi                     | 21.3.10  | ✓      | 31595.2    | 31.14        | 5.63          |
| fastify-big-json         | 4.28.1   | ✓      | 11939.2    | 83.21        | 137.36        |
| express                  | 4.19.2   | ✓      | 10989.0    | 90.37        | 1.96          |
| express-with-middlewares | 4.19.2   | ✓      | 10132.0    | 98.05        | 3.77          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
