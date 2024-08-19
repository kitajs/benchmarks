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
* __Run:__ Mon Aug 19 2024 01:21:25 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.16.0 | ✗      | 46192.0    | 21.14        | 8.24          |
| fastify                  | 4.28.1   | ✓      | 46079.2    | 21.18        | 8.26          |
| polka                    | 0.5.2    | ✓      | 45904.8    | 21.28        | 8.19          |
| kita                     | 1.1.36   | ✓      | 45321.6    | 21.56        | 8.13          |
| connect                  | 3.7.0    | ✗      | 45178.4    | 21.64        | 8.06          |
| server-base              | 7.1.32   | ✗      | 44660.0    | 21.93        | 7.96          |
| rayo                     | 1.4.6    | ✓      | 44179.2    | 22.13        | 7.88          |
| server-base-router       | 7.1.32   | ✓      | 44151.2    | 22.16        | 7.87          |
| 0http                    | 3.5.3    | ✓      | 43731.2    | 22.37        | 7.80          |
| connect-router           | 1.3.8    | ✓      | 43034.4    | 22.73        | 7.67          |
| h3                       | 1.12.0   | ✗      | 41580.8    | 23.56        | 7.42          |
| polkadot                 | 1.0.0    | ✗      | 41065.6    | 23.85        | 7.32          |
| h3-router                | 1.12.0   | ✓      | 40092.8    | 24.44        | 7.15          |
| hono                     | 4.5.6    | ✓      | 39799.2    | 24.61        | 7.10          |
| restana                  | 4.9.9    | ✓      | 36455.4    | 26.93        | 6.50          |
| koa                      | 2.15.3   | ✗      | 36273.0    | 27.05        | 6.47          |
| take-five                | 2.0.0    | ✓      | 34344.0    | 28.62        | 12.35         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34084.8    | 28.81        | 6.08          |
| restify                  | 11.1.0   | ✓      | 34004.4    | 28.89        | 6.13          |
| koa-router               | 12.0.1   | ✓      | 32915.4    | 29.87        | 5.87          |
| hapi                     | 21.3.10  | ✓      | 31136.8    | 31.62        | 5.55          |
| fastify-big-json         | 4.28.1   | ✓      | 11556.4    | 85.97        | 132.96        |
| express                  | 4.19.2   | ✓      | 10835.8    | 91.68        | 1.93          |
| express-with-middlewares | 4.19.2   | ✓      | 9988.6     | 99.52        | 3.71          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
