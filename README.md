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
* __Node:__ `v20.20.1`
* __Run:__ Mon Mar 23 2026 01:58:21 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.1 | ✗      | 45880.0    | 21.30        | 8.18          |
| connect                  | 3.7.0    | ✗      | 45771.2    | 21.36        | 8.16          |
| polka                    | 0.5.2    | ✓      | 45382.4    | 21.53        | 8.09          |
| server-base              | 7.1.32   | ✗      | 44466.4    | 21.99        | 7.93          |
| kita                     | 1.1.36   | ✓      | 44128.0    | 22.16        | 7.91          |
| rayo                     | 1.4.6    | ✓      | 44105.6    | 22.17        | 7.87          |
| server-base-router       | 7.1.32   | ✓      | 43984.8    | 22.24        | 7.84          |
| fastify                  | 4.29.1   | ✓      | 43826.4    | 22.31        | 7.86          |
| 0http                    | 3.5.3    | ✓      | 43514.4    | 22.48        | 7.76          |
| polkadot                 | 1.0.0    | ✗      | 43455.2    | 22.51        | 7.75          |
| connect-router           | 1.3.8    | ✓      | 42576.8    | 22.99        | 7.59          |
| h3                       | 1.15.10  | ✗      | 40439.2    | 24.23        | 7.21          |
| h3-router                | 1.15.10  | ✓      | 40236.0    | 24.34        | 7.18          |
| restana                  | 4.9.9    | ✓      | 38712.0    | 25.33        | 6.90          |
| koa                      | 2.16.4   | ✗      | 36150.2    | 27.17        | 6.45          |
| hono                     | 4.12.8   | ✓      | 35191.4    | 27.92        | 5.77          |
| restify                  | 11.1.0   | ✓      | 34205.8    | 28.73        | 6.17          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33660.6    | 29.20        | 6.00          |
| take-five                | 2.0.0    | ✓      | 33599.0    | 29.25        | 12.08         |
| koa-router               | 12.0.1   | ✓      | 31974.6    | 30.77        | 5.70          |
| hapi                     | 21.4.7   | ✓      | 31751.4    | 30.99        | 5.66          |
| fastify-big-json         | 4.29.1   | ✓      | 11591.4    | 85.71        | 133.37        |
| express                  | 4.22.1   | ✓      | 11079.6    | 89.67        | 1.98          |
| express-with-middlewares | 4.22.1   | ✓      | 10180.4    | 97.63        | 3.79          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
