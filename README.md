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
* __Node:__ `v20.19.2`
* __Run:__ Mon Jun 02 2025 01:38:19 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.2 | ✗      | 47534.4    | 20.55        | 8.48          |
| polka                    | 0.5.2    | ✓      | 46899.2    | 20.83        | 8.36          |
| connect                  | 3.7.0    | ✗      | 45999.4    | 21.24        | 8.20          |
| fastify                  | 4.29.1   | ✓      | 45789.6    | 21.34        | 8.21          |
| server-base              | 7.1.32   | ✗      | 44887.2    | 21.78        | 8.00          |
| polkadot                 | 1.0.0    | ✗      | 44884.0    | 21.78        | 8.00          |
| rayo                     | 1.4.6    | ✓      | 44621.6    | 21.90        | 7.96          |
| kita                     | 1.1.36   | ✓      | 44606.4    | 21.92        | 8.00          |
| server-base-router       | 7.1.32   | ✓      | 44512.8    | 21.96        | 7.94          |
| 0http                    | 3.5.3    | ✓      | 44464.0    | 22.00        | 7.93          |
| connect-router           | 1.3.8    | ✓      | 43733.6    | 22.35        | 7.80          |
| h3                       | 1.15.3   | ✗      | 40926.4    | 23.94        | 7.30          |
| h3-router                | 1.15.3   | ✓      | 40648.8    | 24.10        | 7.25          |
| hono                     | 4.7.11   | ✓      | 38732.8    | 25.31        | 6.35          |
| restana                  | 4.9.9    | ✓      | 36666.6    | 26.77        | 6.54          |
| koa                      | 2.16.1   | ✗      | 36485.0    | 26.91        | 6.51          |
| take-five                | 2.0.0    | ✓      | 34349.2    | 28.61        | 12.35         |
| restify                  | 11.1.0   | ✓      | 33774.0    | 29.10        | 6.09          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33621.0    | 29.23        | 6.00          |
| koa-router               | 12.0.1   | ✓      | 32446.8    | 30.32        | 5.79          |
| hapi                     | 21.4.0   | ✓      | 30885.2    | 31.87        | 5.51          |
| fastify-big-json         | 4.29.1   | ✓      | 11506.4    | 86.34        | 132.38        |
| express                  | 4.21.2   | ✓      | 10969.8    | 90.58        | 1.96          |
| express-with-middlewares | 4.21.2   | ✓      | 10133.0    | 98.09        | 3.77          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
