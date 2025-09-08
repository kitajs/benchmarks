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
* __Node:__ `v20.19.4`
* __Run:__ Mon Sep 08 2025 01:34:32 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.4 | ✗      | 47800.8    | 20.42        | 8.53          |
| polka                    | 0.5.2    | ✓      | 46040.0    | 21.22        | 8.21          |
| fastify                  | 4.29.1   | ✓      | 45802.4    | 21.35        | 8.21          |
| kita                     | 1.1.36   | ✓      | 45686.4    | 21.40        | 8.19          |
| connect                  | 3.7.0    | ✗      | 45631.2    | 21.41        | 8.14          |
| 0http                    | 3.5.3    | ✓      | 45147.2    | 21.65        | 8.05          |
| rayo                     | 1.4.6    | ✓      | 44917.6    | 21.76        | 8.01          |
| polkadot                 | 1.0.0    | ✗      | 44845.6    | 21.80        | 8.00          |
| server-base              | 7.1.32   | ✗      | 44823.2    | 21.81        | 7.99          |
| server-base-router       | 7.1.32   | ✓      | 44764.8    | 21.84        | 7.98          |
| h3-router                | 1.15.4   | ✓      | 43530.4    | 22.48        | 7.76          |
| h3                       | 1.15.4   | ✗      | 43159.2    | 22.68        | 7.70          |
| connect-router           | 1.3.8    | ✓      | 43064.0    | 22.71        | 7.68          |
| restana                  | 4.9.9    | ✓      | 38844.2    | 25.24        | 6.93          |
| koa                      | 2.16.2   | ✗      | 36961.0    | 26.56        | 6.59          |
| hono                     | 4.9.6    | ✓      | 36957.8    | 26.53        | 6.06          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35106.6    | 27.98        | 6.26          |
| take-five                | 2.0.0    | ✓      | 34695.0    | 28.30        | 12.47         |
| restify                  | 11.1.0   | ✓      | 34466.2    | 28.51        | 6.21          |
| koa-router               | 12.0.1   | ✓      | 33285.6    | 29.54        | 5.94          |
| hapi                     | 21.4.3   | ✓      | 31561.6    | 31.18        | 5.63          |
| fastify-big-json         | 4.29.1   | ✓      | 11823.2    | 84.01        | 136.03        |
| express                  | 4.21.2   | ✓      | 11200.2    | 88.71        | 2.00          |
| express-with-middlewares | 4.21.2   | ✓      | 10585.8    | 93.87        | 3.94          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
