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
* __Node:__ `v20.19.5`
* __Run:__ Mon Sep 29 2025 01:33:10 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 47371.2    | 20.62        | 8.45          |
| kita                     | 1.1.36   | ✓      | 46864.0    | 20.83        | 8.40          |
| bare                     | v20.19.5 | ✗      | 45972.8    | 21.25        | 8.20          |
| server-base              | 7.1.32   | ✗      | 45744.8    | 21.36        | 8.16          |
| server-base-router       | 7.1.32   | ✓      | 45614.4    | 21.41        | 8.13          |
| rayo                     | 1.4.6    | ✓      | 45552.8    | 21.45        | 8.12          |
| fastify                  | 4.29.1   | ✓      | 45028.0    | 21.71        | 8.07          |
| connect                  | 3.7.0    | ✗      | 44172.0    | 22.14        | 7.88          |
| polkadot                 | 1.0.0    | ✗      | 44087.2    | 22.19        | 7.86          |
| 0http                    | 3.5.3    | ✓      | 41417.6    | 23.65        | 7.39          |
| connect-router           | 1.3.8    | ✓      | 40943.2    | 23.92        | 7.30          |
| h3                       | 1.15.4   | ✗      | 40499.2    | 24.18        | 7.22          |
| h3-router                | 1.15.4   | ✓      | 40258.4    | 24.34        | 7.18          |
| restana                  | 4.9.9    | ✓      | 38386.4    | 25.56        | 6.85          |
| koa                      | 2.16.2   | ✗      | 37025.6    | 26.50        | 6.60          |
| hono                     | 4.9.9    | ✓      | 35997.6    | 27.27        | 5.90          |
| restify                  | 11.1.0   | ✓      | 35321.4    | 27.81        | 6.37          |
| take-five                | 2.0.0    | ✓      | 35263.4    | 27.86        | 12.68         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34023.6    | 28.88        | 6.07          |
| koa-router               | 12.0.1   | ✓      | 31689.4    | 31.05        | 5.65          |
| hapi                     | 21.4.3   | ✓      | 30646.0    | 32.13        | 5.47          |
| fastify-big-json         | 4.29.1   | ✓      | 11634.8    | 85.39        | 133.87        |
| express                  | 4.21.2   | ✓      | 10582.2    | 93.92        | 1.89          |
| express-with-middlewares | 4.21.2   | ✓      | 9867.9     | 100.73       | 3.67          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
