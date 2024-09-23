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
* __Node:__ `v20.17.0`
* __Run:__ Mon Sep 23 2024 01:26:51 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.17.0 | ✗      | 48058.4    | 20.31        | 8.57          |
| fastify                  | 4.28.1   | ✓      | 47281.6    | 20.64        | 8.48          |
| kita                     | 1.1.36   | ✓      | 46831.2    | 20.85        | 8.40          |
| polka                    | 0.5.2    | ✓      | 46695.2    | 20.90        | 8.33          |
| 0http                    | 3.5.3    | ✓      | 46646.4    | 20.94        | 8.32          |
| connect                  | 3.7.0    | ✗      | 46502.2    | 20.98        | 8.29          |
| polkadot                 | 1.0.0    | ✗      | 45815.2    | 21.33        | 8.17          |
| rayo                     | 1.4.6    | ✓      | 45787.2    | 21.34        | 8.17          |
| server-base              | 7.1.32   | ✗      | 45558.4    | 21.45        | 8.13          |
| server-base-router       | 7.1.32   | ✓      | 45060.0    | 21.71        | 8.04          |
| connect-router           | 1.3.8    | ✓      | 43772.8    | 22.33        | 7.81          |
| h3                       | 1.12.0   | ✗      | 42745.6    | 22.90        | 7.62          |
| h3-router                | 1.12.0   | ✓      | 40952.0    | 23.92        | 7.30          |
| restana                  | 4.9.9    | ✓      | 40174.4    | 24.39        | 7.16          |
| hono                     | 4.6.2    | ✓      | 39786.4    | 24.64        | 7.10          |
| koa                      | 2.15.3   | ✗      | 37342.6    | 26.26        | 6.66          |
| take-five                | 2.0.0    | ✓      | 35448.2    | 27.71        | 12.74         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35410.8    | 27.72        | 6.32          |
| restify                  | 11.1.0   | ✓      | 34499.0    | 28.48        | 6.22          |
| koa-router               | 12.0.1   | ✓      | 34192.6    | 28.74        | 6.10          |
| hapi                     | 21.3.10  | ✓      | 31905.8    | 30.84        | 5.69          |
| fastify-big-json         | 4.28.1   | ✓      | 11831.2    | 83.94        | 136.12        |
| express                  | 4.21.0   | ✓      | 11050.4    | 89.90        | 1.97          |
| express-with-middlewares | 4.21.0   | ✓      | 10270.5    | 96.77        | 3.82          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
