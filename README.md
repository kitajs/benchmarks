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
* __Node:__ `v20.19.0`
* __Run:__ Mon Mar 31 2025 01:34:24 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.0 | ✗      | 47297.6    | 20.64        | 8.43          |
| polka                    | 0.5.2    | ✓      | 46632.8    | 20.94        | 8.32          |
| fastify                  | 4.29.0   | ✓      | 46373.6    | 21.04        | 8.31          |
| kita                     | 1.1.36   | ✓      | 46301.6    | 21.09        | 8.30          |
| rayo                     | 1.4.6    | ✓      | 46255.2    | 21.11        | 8.25          |
| server-base-router       | 7.1.32   | ✓      | 45664.8    | 21.42        | 8.14          |
| connect                  | 3.7.0    | ✗      | 45529.6    | 21.48        | 8.12          |
| polkadot                 | 1.0.0    | ✗      | 45413.6    | 21.52        | 8.10          |
| server-base              | 7.1.32   | ✗      | 45252.8    | 21.61        | 8.07          |
| 0http                    | 3.5.3    | ✓      | 44911.2    | 21.77        | 8.01          |
| connect-router           | 1.3.8    | ✓      | 43404.8    | 22.53        | 7.74          |
| h3                       | 1.15.1   | ✗      | 42656.0    | 22.95        | 7.61          |
| h3-router                | 1.15.1   | ✓      | 41336.8    | 23.69        | 7.37          |
| hono                     | 4.7.5    | ✓      | 40380.8    | 24.25        | 6.62          |
| restana                  | 4.9.9    | ✓      | 40155.2    | 24.40        | 7.16          |
| koa                      | 2.16.0   | ✗      | 36915.2    | 26.58        | 6.58          |
| take-five                | 2.0.0    | ✓      | 35240.2    | 27.88        | 12.67         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34825.8    | 28.22        | 6.21          |
| restify                  | 11.1.0   | ✓      | 34727.2    | 28.29        | 6.26          |
| koa-router               | 12.0.1   | ✓      | 33521.2    | 29.33        | 5.98          |
| hapi                     | 21.4.0   | ✓      | 31626.4    | 31.11        | 5.64          |
| fastify-big-json         | 4.29.0   | ✓      | 11658.6    | 85.21        | 134.13        |
| express                  | 4.21.2   | ✓      | 11183.8    | 88.83        | 1.99          |
| express-with-middlewares | 4.21.2   | ✓      | 10343.0    | 96.09        | 3.85          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
