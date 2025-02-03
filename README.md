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
* __Node:__ `v20.18.2`
* __Run:__ Mon Feb 03 2025 01:27:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.2 | ✗      | 48787.2    | 20.01        | 8.70          |
| fastify                  | 4.29.0   | ✓      | 47478.4    | 20.56        | 8.51          |
| connect                  | 3.7.0    | ✗      | 47477.6    | 20.55        | 8.47          |
| polka                    | 0.5.2    | ✓      | 46958.4    | 20.80        | 8.37          |
| polkadot                 | 1.0.0    | ✗      | 46851.2    | 20.85        | 8.36          |
| server-base-router       | 7.1.32   | ✓      | 46838.4    | 20.84        | 8.35          |
| rayo                     | 1.4.6    | ✓      | 46672.0    | 20.92        | 8.32          |
| 0http                    | 3.5.3    | ✓      | 46609.6    | 20.95        | 8.31          |
| server-base              | 7.1.32   | ✗      | 46566.4    | 20.96        | 8.30          |
| kita                     | 1.1.36   | ✓      | 45011.2    | 21.73        | 8.07          |
| connect-router           | 1.3.8    | ✓      | 44217.6    | 22.12        | 7.89          |
| restana                  | 4.9.9    | ✓      | 41421.6    | 23.63        | 7.39          |
| h3                       | 1.14.0   | ✗      | 41149.6    | 23.80        | 7.34          |
| h3-router                | 1.14.0   | ✓      | 40852.8    | 23.97        | 7.29          |
| hono                     | 4.6.20   | ✓      | 40532.0    | 24.17        | 6.65          |
| koa                      | 2.15.3   | ✗      | 36145.4    | 27.16        | 6.45          |
| restify                  | 11.1.0   | ✓      | 36033.4    | 27.23        | 6.49          |
| take-five                | 2.0.0    | ✓      | 35903.4    | 27.32        | 12.91         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35123.4    | 27.97        | 6.26          |
| koa-router               | 12.0.1   | ✓      | 34506.2    | 28.48        | 6.15          |
| hapi                     | 21.3.12  | ✓      | 31381.6    | 31.36        | 5.60          |
| fastify-big-json         | 4.29.0   | ✓      | 11785.6    | 84.30        | 135.60        |
| express                  | 4.21.2   | ✓      | 11275.6    | 88.12        | 2.01          |
| express-with-middlewares | 4.21.2   | ✓      | 10468.8    | 94.92        | 3.89          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
