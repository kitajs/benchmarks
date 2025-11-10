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
* __Run:__ Mon Nov 10 2025 01:37:56 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 45986.4    | 21.24        | 8.20          |
| bare                     | v20.19.5 | ✗      | 45668.0    | 21.40        | 8.14          |
| fastify                  | 4.29.1   | ✓      | 45556.0    | 21.46        | 8.17          |
| kita                     | 1.1.36   | ✓      | 45436.8    | 21.50        | 8.15          |
| connect                  | 3.7.0    | ✗      | 45215.2    | 21.62        | 8.06          |
| server-base              | 7.1.32   | ✗      | 44418.4    | 22.01        | 7.92          |
| rayo                     | 1.4.6    | ✓      | 44310.4    | 22.07        | 7.90          |
| server-base-router       | 7.1.32   | ✓      | 44244.8    | 22.11        | 7.89          |
| polkadot                 | 1.0.0    | ✗      | 44110.4    | 22.17        | 7.87          |
| h3-router                | 1.15.4   | ✓      | 42013.6    | 23.30        | 7.49          |
| 0http                    | 3.5.3    | ✓      | 42008.0    | 23.31        | 7.49          |
| h3                       | 1.15.4   | ✗      | 41958.4    | 23.34        | 7.48          |
| connect-router           | 1.3.8    | ✓      | 41829.6    | 23.41        | 7.46          |
| restana                  | 4.9.9    | ✓      | 38253.0    | 25.64        | 6.82          |
| hono                     | 4.10.4   | ✓      | 37256.0    | 26.34        | 6.11          |
| koa                      | 2.16.3   | ✗      | 36691.8    | 26.75        | 6.54          |
| take-five                | 2.0.0    | ✓      | 34677.8    | 28.33        | 12.47         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34609.6    | 28.39        | 6.17          |
| restify                  | 11.1.0   | ✓      | 34118.4    | 28.81        | 6.15          |
| koa-router               | 12.0.1   | ✓      | 33347.0    | 29.49        | 5.95          |
| hapi                     | 21.4.4   | ✓      | 31610.2    | 31.13        | 5.64          |
| fastify-big-json         | 4.29.1   | ✓      | 11949.6    | 83.11        | 137.48        |
| express                  | 4.21.2   | ✓      | 11059.2    | 89.85        | 1.97          |
| express-with-middlewares | 4.21.2   | ✓      | 10237.8    | 97.09        | 3.81          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
