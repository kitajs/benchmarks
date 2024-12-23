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
* __Node:__ `v20.18.1`
* __Run:__ Mon Dec 23 2024 01:29:10 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.1 | ✗      | 48011.2    | 20.34        | 8.56          |
| polka                    | 0.5.2    | ✓      | 47158.4    | 20.71        | 8.41          |
| kita                     | 1.1.36   | ✓      | 47092.0    | 20.73        | 8.44          |
| fastify                  | 4.29.0   | ✓      | 47020.0    | 20.75        | 8.43          |
| rayo                     | 1.4.6    | ✓      | 46799.2    | 20.86        | 8.35          |
| connect                  | 3.7.0    | ✗      | 46765.6    | 20.87        | 8.34          |
| 0http                    | 3.5.3    | ✓      | 46439.2    | 21.04        | 8.28          |
| server-base              | 7.1.32   | ✗      | 46248.0    | 21.11        | 8.25          |
| server-base-router       | 7.1.32   | ✓      | 45804.8    | 21.31        | 8.17          |
| polkadot                 | 1.0.0    | ✗      | 45307.2    | 21.57        | 8.08          |
| connect-router           | 1.3.8    | ✓      | 43272.0    | 22.61        | 7.72          |
| h3                       | 1.13.0   | ✗      | 42395.2    | 23.09        | 7.56          |
| hono                     | 4.6.14   | ✓      | 40999.2    | 23.88        | 6.73          |
| h3-router                | 1.13.0   | ✓      | 40523.6    | 24.18        | 7.23          |
| restana                  | 4.9.9    | ✓      | 39951.2    | 24.54        | 7.13          |
| koa                      | 2.15.3   | ✗      | 37756.2    | 25.98        | 6.73          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 36119.4    | 27.18        | 6.44          |
| take-five                | 2.0.0    | ✓      | 35725.0    | 27.48        | 12.84         |
| restify                  | 11.1.0   | ✓      | 35673.4    | 27.54        | 6.43          |
| koa-router               | 12.0.1   | ✓      | 35173.0    | 27.93        | 6.27          |
| hapi                     | 21.3.12  | ✓      | 32264.4    | 30.49        | 5.75          |
| fastify-big-json         | 4.29.0   | ✓      | 11891.0    | 83.54        | 136.81        |
| express                  | 4.21.2   | ✓      | 11420.8    | 86.99        | 2.04          |
| express-with-middlewares | 4.21.2   | ✓      | 10571.8    | 94.00        | 3.93          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
